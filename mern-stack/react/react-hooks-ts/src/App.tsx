import { useState, useEffect, useCallback, useMemo, useRef, type MouseEvent, type KeyboardEvent } from 'react'

interface User{
  id: number,
  username: string,
}

// example fibonacci recursion
type fibFunc = (n: number ) => number;

const fib:fibFunc = (n) => {
  if(n < 2) return n
  return fib(n-1) + fib(n-2)
}
const myNum: number = 37

function App(){
  // const [user, setUser] = useState<User[]>([])
  //const [users, setusers] = useState<User>({} as User) // user as an object as well (lying to compiler), assertion possible
  
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  // const inputRef = useRef<HTMLInputElement>(null!); // non null assertion (definitely not null or undefined)
  const inputRef = useRef<HTMLInputElement>(null);

  // if(!inputRef.current) if not using non null assertion
  console.log(inputRef?.current)
  console.log(inputRef?.current?.value);

  // in strict mode, mount component, unmounts and mounts again
  // useEffect - side effect when something changes  
  useEffect(() =>{ 
    console.log('mounting') // should log twice
    console.log('Users: ', users)
    // clean up function
    return () => console.log('unmounting')

  },[users])

  // useCallback memoize function 
  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | 
    KeyboardEvent<HTMLButtonElement>): void =>setCount(prev => prev + 2), [])

  const result = useMemo<number>(() => fib(myNum), [])
  return (
    <div>
      <h1> {count}</h1>
      {/* <button onClick= {() => setCount(prev => prev + 1)}>Add</button> */}
      <button onClick= {addTwo}>Add</button>
      <h2> {result}</h2>
      <input ref={inputRef} type="text" />

    </div>
  )
}

export default App
