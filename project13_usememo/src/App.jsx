import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input , setInput] = useState(0)

  const expensivevalue = (num)=>{
    console.log("inside Expensive function");

    for(let i=0 ; i<=1000000000 ; i++){};
    return num*2
  }

  let doublevalue = useMemo(()=>expensivevalue(input) , [input])


  return (
    <>
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount((p)=>p+1)}>+</button>
    </div>

    <div>
      <input type="number" value={input} onChange={(e)=>setInput(e.target.value)}/>
      <h2>Input :{doublevalue}</h2>
    </div>
    </>
  )
}

export default App
