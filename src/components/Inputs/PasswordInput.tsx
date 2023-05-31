import { Eye, EyeClosed, Lock, X } from "@phosphor-icons/react";
import { useState } from "react";

interface InputInterface{
    register:any
    focus:any
    resetError:any
}

const PasswordInput = ({register, focus, resetError}: InputInterface) =>{

    const [value, setValue] = useState('');
    const [visibility, setVisibility]=useState(true);
    

    return(
        <div className='w-full p-3 flex items-center bg-grey border-grey rounded-md' onClick={(event: any) => {focus('password')}}>
            <div className="h-5 w-5">
                <Lock color="gray" size={20} />
            </div>
            <input {...register('password')} type={visibility?'password':'text'} placeholder={"Password"} autoComplete="new-password" className='font-medium text-sm ml-2 bg-grey outline-none border-none w-full pr-1' onChange={(e) => { setValue(e.target.value); resetError(); }} value={value} />
            <div className="h-5 w-5 mr-4">
                {value.length == 0 ? null : visibility ? <EyeClosed size={20} color="gray" onClick={() => { setVisibility(false) }} /> : <Eye size={20} color="gray" onClick={() => { setVisibility(true) }}/>}
            </div>
            <div className="h-5 w-5">
                {value.length > 0 ? <X size={20} color="gray" onClick={() => { setValue('') }} /> : null}
            </div>
        </div>
    )
}

export default PasswordInput;