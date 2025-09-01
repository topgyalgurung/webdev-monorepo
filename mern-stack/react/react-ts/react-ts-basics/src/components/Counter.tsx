// import { useState } from "react"

// import type { ReactNode } from "react"

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>, // copy from App [setCount]
    count: number
    // count: ReactNode
}
const Counter = ({setCount, count}: CounterProps) => {
    // const [ count, setCount] = useState(1); // explicit: <number>(1); if using null<number| null>(null); 
  return (
    <>
    {/* <h1> Count is {count}</h1> */}
    <h1> Count is {count}</h1>
    <button onClick = { () => setCount(prev => prev + 1)}> + </button>
    <button onClick = { () => setCount(prev => prev - 1)}> - </button>
    </>
  )
}

export default Counter