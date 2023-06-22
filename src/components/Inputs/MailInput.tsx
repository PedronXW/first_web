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
        <div className='w-full p-3 flex items-center bg-background_color border-background_color rounded-md' onClick={(event: any) => {setState(!state); focus('email')}}>
            <figure className="h-5 w-5">
                <Envelope aria-label="Icone de um envelope." color="gray" size={20} />
            </figure>
            <input aria-label="Campo de inserção de email." {...register('email')} type="text" placeholder={"Email"} autoComplete="off" className='font-medium text-sm ml-2 bg-background_color outline-none border-none w-full pr-1' onChange={(e) => { setValue(e.target.value); resetError(); }} value={value} />
            <button type="reset" className="h-5 w-5">
                {value.length > 0 ? <X aria-label="Icone de um X para indicar o local de limpeza do campo de inserção" size={20} color="gray" onClick={() => { setValue('') }} /> : null}
            </button>
        </div>
    )
}

export default MailInput;