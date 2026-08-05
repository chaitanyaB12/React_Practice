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
       <form action="">
        <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
       </form>
    )
 }
 export default BasicForm;