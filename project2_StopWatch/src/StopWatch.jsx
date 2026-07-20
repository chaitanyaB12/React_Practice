import { useEffect, useRef, useState } from "react";

function StopWatch(){
    const [time, setTime] = useState(0)

    const stopwatchRef = useRef(0)
    const intervalRef = useRef(null)
    const needToResumeRef = useRef(false);


       function handleBlur(){
        needToResumeRef.current = !!intervalRef.current;
        clearInterval(intervalRef.current)
        intervalRef.current= null;
    }

    function handleFocus(){
        if(needToResumeRef.current){
            needToResumeRef.current = false;
            handleStart()
        }
    }

    useEffect(()=>{
        window.addEventListener("blur" , handleBlur);
        window.addEventListener("focus", handleFocus);

        return ()=>{
            window.removeEventListener("blur", handleBlur);
            window.removeEventListener("focus", handleFocus)
        };
    },[time])

 
    function handleStart (){
       
        stopwatchRef.current = new Date().getTime() - time;
        intervalRef.current = setInterval(()=>{
            setTime(new Date().getTime() - stopwatchRef.current);
        },10)

    }

    const handlePause =()=>{
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    const handleReset = ()=>{
        clearInterval(intervalRef.current);
        setTime(0)
    }

    const formatTime = ()=>{
        const ms = Math.floor((time % 1000)/10).toString().padStart(2, "0");
        const s = Math.floor((time / 1000) % 60).toString().padStart(2, "0");
        const m = Math.floor((time / (1000 * 60)) % 60).toString().padStart(2, "0");
        const h = Math.floor((time / (1000 * 60 * 60)) % 24).toString().padStart(2, "0");

        return `${h}:${m}:${s}:${ms}`;
    }
    return(
        <>
        <div className="mt-12 flex justify-center items-center">
            <h1>StopWatch</h1>
           
        </div>
             <p className="flex justify-center mt-12">
                {formatTime()}
             </p>
        <div className="flex justify-evenly items-end">
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        </>
    )
}
export default StopWatch;