import { X } from "@phosphor-icons/react";
import { ReactNode, useState } from "react";

interface InputInterface{
    register:any;
    focus:any;
    pattern_color:string;
    placeholder:string
    id:string
    icon:ReactNode;
}

const BasicInput = ({register, focus, pattern_color, placeholder, id, icon }: InputInterface) =>{
    const [state, setState] = useState(false);
    const [value, setValue] = useState('');
    return(
        <div className={`w-full cursor-pointer p-3 flex items-center drop-shadow-md bg-${pattern_color} border-${pattern_color} rounded-md`} onClick={(event: any) => {focus(id)}}>
            <figure className="h-5 w-5">
                {icon}
            </figure>
            <input {...register(id)} type="text" placeholder={placeholder} autoComplete="off" className={`font-medium text-sm ml-2 bg-${pattern_color} border-${pattern_color} w-full pr-1`} onChange={(e) => { setValue(e.target.value); }} value={value} />
            <button type="reset" className="h-5 w-5">
                {value.length > 0 ? <X size={20} className="text-primary_color" onClick={() => { setValue('') }} /> : null}
            </button>
        </div>
    )
}

export default BasicInput;