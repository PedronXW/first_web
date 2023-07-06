import { Eye, EyeClosed, X } from "@phosphor-icons/react";
import { useState } from "react";

interface InputActionsInterface{
    value:string,
    setValue:Function
}

const InputActions = ({value, setValue}:InputActionsInterface) => {

    const [visibility, setVisibility]=useState(true);

    return(
        <div className="flex">
            <button type="button" className="h-5 w-5 mr-4">
                {value.length == 0 ? null : visibility ?
                    <EyeClosed size={20} className="text-primary_color" onClick={() => { setVisibility(false) }} /> : 
                    <Eye size={20} className="text-primary_color" onClick={() => { setVisibility(true) }}/>}
            </button>
            <button type="reset" className="h-5 w-5">
                {value.length > 0 ? <X size={20} className="text-primary_color" onClick={() => { setValue('') }} /> : null}
            </button>
        </div>
    )
}

export default InputActions;