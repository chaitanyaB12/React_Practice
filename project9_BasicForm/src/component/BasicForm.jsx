import { useReducer } from "react";

    

 const BasicForm = ()=>{

     const BasicInfo ={
        name:"",
        email:"",
        age:"",
        gender:"",
        city:""
    }

    const [action, payload] = useReducer(reducer, BasicInfo)

  

    return(
       <form>
        <div className="bg-indigo-800 h-screen">
            <p>heelo</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
       </form>
    )
 }
 export default BasicForm;