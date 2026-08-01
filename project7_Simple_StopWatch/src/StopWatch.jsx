import { useRef, useState } from "react"




const StopWatch = () => {

    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const s =  Math.floor( (time/1000) % 60 )
    const m = Math.floor( (time/(1000 * 60)) % 60 )
    const h = Math.floor( (time / ( 1000 * 60 * 60 ) ) )

    const formatTime = `Hours:${String(h).padStart(2, "0")} Mins:${String(m).padStart(2, "0")} Sec:${String(s).padStart(2, "0")}`

    const handleStart = ()=>{
        if(intervalRef.current) return;

        intervalRef.current =  setInterval(() => {
            setTime((prev)=>prev+10)}, 10);
          }


    const handlePause = ()=>{
       clearInterval(intervalRef.current);
       intervalRef.current = null        
    }


    const handleReset = ()=>{
      clearInterval(intervalRef.current);
      intervalRef.current= null;
      setTime(0)

    }


  return (
    <div className="bg-zinc-500 flex justify-center min-h-screen ">
    <div className=" bg-mist-400 w-1/3 h-72 mt-52">
        <div className="flex justify-center mt-15">
            <h1 className="text-2xl">{formatTime}</h1>
            </div>
        <div className="flex justify-center mt-8 gap-5">
            <button onClick={handleStart} className="border px-5 py-1 bg-orange-300 hover:scale-110 cursor-pointer transition-all">Start</button>
            <button onClick={handlePause} className="border px-5 py-1 bg-yellow-300 hover:scale-110 cursor-pointer transition-all">Pause</button>
            <button onClick={handleReset} className="border px-5 py-1 bg-white hover:scale-110 cursor-pointer transition-all">Reset</button>
            </div>
    </div>

    </div>
  )
}

export default StopWatch

