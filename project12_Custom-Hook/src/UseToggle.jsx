import { useState } from "react";


const UseToggle = (defaultvalue)=>{

    const [value , setValue] = useState(defaultvalue)

    function togglevalue (val){
        
        console.log(val);

        if(typeof val != "boolean"){
            console.log("if")
            setValue(!value)
        }else{
            console.log("else");
            setValue(val)           
        }
    }
    return [value , togglevalue]

}

export default UseToggle;