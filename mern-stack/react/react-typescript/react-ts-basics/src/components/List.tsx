import type { ReactNode } from "react";

//generic
interface ListProps<T>{
    items: T[], // array of items
    render: (item: T) => ReactNode // METHOD
}

// TS hard time recognizing this generic
//  solution: <T extends {}> or easier <T,>
// or achieve same with function list
// functional component with anonymous function
const List = <T,> ({items, render}: ListProps<T>) => {
  return (
    <ul>
        {items.map((item, i) => (
            <li key={i}>
                {render(item)}
            </li>
        ))}
    </ul>
  )
}

export default List