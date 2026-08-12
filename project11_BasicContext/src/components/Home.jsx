import { useContext } from "react"
import { countcontext } from "../context/CounterContext"



const Home = () => {
    const value = useContext(countcontext);
    
  return (
    <div className="bg-cyan-600 p-12 text-center text-6xl font-semibold">
        <p>Counter :{value.counter}</p>
        
        {value.Heros.map((item, index)=> (
          <div key={index} className="flex bg-amber-400 justify-center pt-3">
            <p>{item.name} :</p>
            <p>: {item.Power || item.power}</p>
          </div>

        ))}
    </div>
  )
}

export default Home