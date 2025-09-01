import { useState } from "react"
const Counter = () => {
    const [ count, setCount] = useState(1); // explicit: <number>(1); if using null<number| null>(null); 
  return (
    <>
    <h1> Count is {count}</h1>
    <button onClick = { () => setCount(prev => prev + 1)}> + </button>
    <button onClick = { () => setCount(prev => prev - 1)}> - </button>

    </>
  )
}

export default Counter