import { useContext } from "react"
import { countcontext } from "../context/CounterContext"

 

const Button = () => {
    const val = useContext(countcontext)
  return (
    <>

  <div className=" flex justify-center items-center gap-12 mt-12">
    <div className="bg-red-400  text-center pt-2 mt-2 w-12 flex justify-center items-center pb-1">
        <button className="text-4xl " onClick={()=>val.setCounter((prev)=>prev +1)}>+</button>
    </div>
    <div className="bg-green-600 text-center pt-2 mt-2 w-12 flex justify-center items-center pb-1 ">
      <button className="text-4xl " onClick={()=>val.setCounter((prev)=>prev - 1)}>-</button>
    </div>
  </div>
  
      </>
  )
}

export default Button