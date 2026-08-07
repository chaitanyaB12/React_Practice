import { useReducer, useState } from "react";

const BasicInfo = {
    name :"",
    email:"",
    age:"",
    gender:"",
    city:""

}
const reducer = (state , action)=>{
   if(action.type === "Reset"){
    return BasicInfo;
}
    return{...state , [action.type] : action.val}
}


 const BasicForm = ()=>{

    const [state, dispatch] = useReducer(reducer, BasicInfo)
    const [users, setUsers] = useState([])

    const handleClick = ()=>{
        console.log(state);
        setUsers([...users, state])
        dispatch({type:"Reset"})
    }

    return(
       
        <div className="bg-lime-200 h-screen">
            <div className="flex flex-col justify-center items-center pt-5 gap-5 text-4xl">
                <h1 className="font-serif">UseReducer Hook</h1>
            <input type="text" value={state.name} className="border p-2" onChange={(e)=>dispatch({val:e.target.value, type:"name"})} placeholder="Enter Your Name"/>
            <input type="text" value={state.email} className="border p-2" onChange={(e)=>dispatch({val:e.target.value ,type:"email"})} placeholder="Enter Your email"/>
            <input type="text" value={state.age} className="border p-2" onChange={(e)=>dispatch({val:e.target.value ,type:"age"})} placeholder="Enter Your age"/>
            <input type="text" value={state.gender} className="border p-2" onChange={(e)=>dispatch({val:e.target.value ,type:"gender"})} placeholder="Enter Your gender"/>
            <input type="text" value={state.city} className="border p-2" onChange={(e)=>dispatch({val:e.target.value ,type:"city"})} placeholder="Enter Your City"/>

              {/* <ul className="mt-12 flex flex-col">
                <li >Name : {state.name}</li>
                <li >Email : {state.email}</li>
                <li>Age : {state.age}</li>
                <li>Gender :{state.gender}</li>
                <li>City : {state.city}</li>
            </ul> */}

                    {users.map((item, index)=>(
                        <div key={index}>
                            <li>Name : {item.name}</li>
                            <li>Email : {item.email}</li>
                            <li>Age : {item.age}</li>
                            <li>Gender : {item.gender}</li>
                            <li>City : {item.city}</li>
                        </div>
                    ))}
                <button onClick={handleClick} className="border bg-red-200 px-8 p-1 ">Add</button>
            </div>         
        </div>
       
    )
 }
 export default BasicForm;