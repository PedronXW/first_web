import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { InputContext } from "./InputRoot";


interface InputTextInterface{
    placeholder:string
}

const InputText = ({ placeholder }:InputTextInterface) =>{

    const {visibility, pattern_color, value, changeValue, id} =useContext(InputContext);
    const {register, setFocus}= useFormContext();

    return(
        <input {...register(id)} type={visibility?'password':'text'} placeholder={placeholder} autoComplete="off" className={`font-medium text-sm ml-2 bg-${pattern_color} border-${pattern_color} w-full pr-1`} onChange={(e) => { changeValue(e.target.value); }} value={value} />
    )
}

export default InputText