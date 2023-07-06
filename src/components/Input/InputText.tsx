import { useState } from "react";
import { useFormContext } from "react-hook-form";


interface InputTextInterface{
    pattern_color:string;
    placeholder:string
    visibility:boolean
    id:string
}

const InputText = ({visibility, placeholder, pattern_color, id}:InputTextInterface) =>{

    const [value, setValue] = useState('');
    const {register, setFocus}= useFormContext();

    return(
        <input {...register(id)} type={visibility?'password':'text'} placeholder={placeholder} autoComplete="off" className={`font-medium text-sm ml-2 bg-${pattern_color} border-${pattern_color} w-full pr-1`} onChange={(e) => { setValue(e.target.value); }} value={value} />
    )
}

export default InputText