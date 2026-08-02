const Calculator = ()=>{
    return(
       <div className="bg-olive-600 min-h-screen flex justify-center items-center">

        <div className="bg-mauve-500 h-82 lg:w-1/6 lg:w/1/2 sm:w-1/4 rounded-2xl">
            <p type="text" className="border-b py-2 w-full rounded-2xl outline-none mt-2 text-2xl"/>
            <p>total</p>      
            <div className="grid grid-cols-3 gap-2 mt-7 ml-5">
             <button className="border w-12">1</button>
             <button className="border w-12">2</button>
             <button className="border w-12">3</button>
             <button className="border w-12">4</button>
             <button className="border w-12">5</button>
             <button className="border w-12">6</button>
             <button className="border w-12">7</button>
             <button className="border w-12">8</button>
             <button className="border w-12">9</button>
             <button className="border w-12">0</button>
             <button className="border w-12">+</button>
             <button className="border w-12">-</button><button className="border w-12">*</button>
             <button className="border w-12">/</button><button className="border w-12">=</button>
            </div>     
        </div>

       </div>
    )

}

export default Calculator;