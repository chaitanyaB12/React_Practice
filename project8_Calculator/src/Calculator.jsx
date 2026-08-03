import { useState } from "react";
import {evaluate as calculate} from "mathjs"



const Calculator = ()=>{

    const [input, setInput] = useState('');

    const operators = ["%", "*", "-", "+" , "/"]

    const handlebutton = (value)=>{
        const lastChar = input[input.length-1];
        if(operators.includes(value) && operators.includes(lastChar)){
            return;
        }
        setInput((prev)=>prev+value)
    }

    const handleAllclear = ()=>{
        setInput('')
    }


    const handledelete = ()=>{
        setInput((prev)=>prev.slice(0 ,-1))

    }
    const handleTotal = ()=>{
        try{
            const result = calculate(input);
            setInput(result.toString());
        }catch(error){
            setInput(error.message)
        }
    }


    return(
       <div className="bg-olive-600 min-h-screen flex justify-center items-center">

        <div className="bg-mauve-500 h-72 lg:w-1/6 lg:w-1/2 sm:w-1/4 rounded-2xl">
        <div type="text" className="border-b h-14 rounded-2xl flex items-center justify-end px-3 text-3xl whitespace-nowrap overflow-x-auto">{input || "0"}</div>      
          <div className="grid grid-cols-4 gap-2 mt-4 ml-2">
             <button value="AC"  onClick={handleAllclear} className="border w-12" >AC</button>
             <button value="DEL"  onClick={handledelete} className="border w-12" >DEL</button>
             <button value="%" onClick={()=>handlebutton("%")}   className="border w-12" >%</button>
             <button value="/" onClick={()=>handlebutton("/")}   className="border w-12" >/</button>
             <button value="7" onClick={()=>handlebutton("7")}   className="border w-12" >7</button>
             <button value="8" onClick={()=>handlebutton("8")}   className="border w-12" >8</button>
             <button value="9" onClick={()=>handlebutton("9")}   className="border w-12" >9</button>
             <button value="*" onClick={()=>handlebutton("*")}   className="border w-12" >*</button>
             <button value="4" onClick={()=>handlebutton("4")}   className="border w-12" >4</button>
             <button value="5" onClick={()=>handlebutton("5")}   className="border w-12" >5</button>
             <button value="6" onClick={()=>handlebutton("6")}   className="border w-12" >6</button>
             <button value="+" onClick={()=>handlebutton("+")}   className="border w-12" >+</button>
             <button value="1" onClick={()=>handlebutton("1")}   className="border w-12" >1</button>
             <button value="2" onClick={()=>handlebutton("2")}   className="border w-12" >2</button>
             <button value="3" onClick={()=>handlebutton("3")}   className="border w-12" >3</button>
             <button value="-" onClick={()=>handlebutton("-")}   className="border w-12" >  -</button>
             <button value="0" onClick={()=>handlebutton("0")}   className="border w-12 mt-1" >0</button>
             <button value="=" onClick={handleTotal}  className="border w-44 p-2 mt-1 " >=</button>
            </div>     
        </div>

       </div>
    )

}

export default Calculator;