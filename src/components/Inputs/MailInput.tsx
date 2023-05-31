import { Envelope, X } from "@phosphor-icons/react";
import { useRef, useState } from "react";

interface InputInterface{
    register:any;
    focus:any;
    resetError:any
}

const MailInput = ({register, focus, resetError}: InputInterface) =>{

    const [state, setState] = useState(false);
    const ref = useRef<any>(null);
    const inputRef = useRef<any>(null);
    const [value, setValue] = useState('');
    return(
        <div className='w-full p-3 flex items-center bg-grey border-grey rounded-md' onClick={(event: any) => {setState(!state); focus('email')}}>
            <div className="h-5 w-5">
                <Envelope color="gray" size={20} />
            </div>
            <input {...register('email')} type="text" placeholder={"Email"} autoComplete="off" className='font-medium text-sm ml-2 bg-grey outline-none border-none w-full pr-1' onChange={(e) => { setValue(e.target.value); resetError(); }} value={value} />
            {value.length > 0 ? <X size={20} color="gray" onClick={() => { setValue('') }} /> : null}
        </div>
    )
}

export default MailInput;