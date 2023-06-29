import { Eye, EyeClosed, Lock, X } from "@phosphor-icons/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

interface PasswordInputInterface{
    pattern_color:string;
    placeholder:string
    id:string
}

const PasswordInput = ({pattern_color, placeholder, id}: PasswordInputInterface) =>{

    const [value, setValue] = useState('');
    const [visibility, setVisibility]=useState(true);

    const {register, setFocus}= useFormContext();
    

    return(
        <div className={`w-full cursor-pointer drop-shadow-md p-3 flex items-center bg-${pattern_color} border-${pattern_color} rounded-md`} onClick={(event: any) => {setFocus(id)}}>
            <figure className="h-5 w-5">
                <Lock className="text-primary_color" size={20} />
            </figure>
            <input {...register(id)} type={visibility?'password':'text'} placeholder={placeholder} autoComplete="off" className={`font-medium text-sm ml-2 bg-${pattern_color} border-${pattern_color} w-full pr-1`} onChange={(e) => { setValue(e.target.value); }} value={value} />
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

export default PasswordInput;