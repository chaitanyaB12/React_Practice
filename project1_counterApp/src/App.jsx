import { useState } from "react";


function App(){
  const [count, setCount] = useState(0)


  const handleIncrement = ()=>{
    setCount(prev=>prev+1)
  }
  const handleDecrement = ()=>{
    count>0 ? setCount(prev=>prev-1) :""
    
  }
  return(
    <div>
    <div className=" border-2 mt-32 w-1/4 justify-self-center bg-mist-400">
        <div className="flex justify-center items-center">
            <h1 className="mt-6 text-5xl bg-taupe-300 pb-5 p-3 rounded-lg">Counter App</h1>
        </div>
        <div className="flex justify-center mt-12 text-6xl">
            <p>{count}</p>
                      
        </div>
        <div className="flex justify-center items-center">
          <button className="text-4xl border-2 bg-red-500 m-4 w-28 rounded-2xl h-12 hover:scale-105 hover:bg-red-600" onClick={handleIncrement}>+</button>
          <button className="text-4xl border-2 bg-yellow-400 m-4 w-28 rounded-2xl h-12 hover:scale-105 hover:bg-yellow-500" onClick={handleDecrement}>-</button>
        </div>
        <div className="flex justify-center items-center">
          <button className="text-4xl border-2 bg-zinc-400 m-4 w-28 rounded-2xl h-12 hover:scale-105" onClick={()=>setCount(0)}>Reset</button>
        </div>
        
    </div>
    </div>
  )
}
export default App;