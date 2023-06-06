import { useState } from "react";

const Notification=()=>{

    const [state, setState]=useState(false);

    setTimeout(()=>{
        setState(!state);
    },5000)
    
    return(
        <div className={`h-20 w-72 bg-red-500 absolute bottom-4 right-4 animation-hidder`} onClick={()=>{setState(true)}}>
            
        </div>
    )
}

export default Notification;