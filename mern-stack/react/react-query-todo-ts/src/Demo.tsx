

import {useMutation, useQueryClient, useQuery} from "@tanstack/react-query";
import {fetchTodos, addTodo} from "./api";
import TodoCard from './components/TodoCard';
import { useState } from "react";

// React Query will cache your data by default by query key 
// but it will still refetch the data when you call the query again in the background
// but to remove this behavior, you can set the staleTime to Infinity

export default function Demo() {
    const queryClient = useQueryClient();

    const [title, setTitle] = useState("");
    const [search, setSearch] = useState("");

    const {data:todos, isLoading} = useQuery({
        // queryFn: () => fetchTodos(),
        queryFn: () => fetchTodos(search),
        // every parameter passed to function has to go to queryKey
        queryKey: ["todos", {search}], // create cache using this key
        // and will show you the cached data instead of fetching it again
        staleTime: Infinity, // not going to refetch the data even in the background
        cacheTime: 0, // never cache the data, always make fetch request  
    });

    // query and mutation are not linked
    // so we need to tell react-query to refetch the todos after adding a new todo
   const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

    if(isLoading) {
        return <div>Loading...</div>;
    }

    return(
        <div>
            <div>
                <input
                    type="text"
                    onChange={((e) => setTitle(e.target.value))}
                    value={title}
                />
             <button
          onClick={async () => {
            try {
              await addTodoMutation({ title });
              setTitle("");
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Add Todo
        </button>
      </div>
      {todos?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}