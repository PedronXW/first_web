import { Envelope, X } from "@phosphor-icons/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";


const MailInput = () =>{

    const [state, setState] = useState(false);
    const [value, setValue] = useState('');


    const {register, setFocus} = useFormContext();

    return(
        <div className='w-full p-3 flex items-center bg-background_color border-background_color rounded-md drop-shadow-md' onClick={(event: any) => {setState(!state); setFocus('email')}}>
            <figure className="h-5 w-5">
                <Envelope aria-label="Icone de um envelope." color="gray" size={20} />
            </figure>
            <input aria-label="Campo de inserção de email." {...register('email')} type="text" placeholder={"Email"} autoComplete="off" className='font-medium text-sm ml-2 bg-background_color outline-none border-none w-full pr-1' onChange={(e) => { setValue(e.target.value); }} value={value} />
            <button type="reset" className="h-5 w-5">
                {value.length > 0 ? <X aria-label="Icone de um X para indicar o local de limpeza do campo de inserção" size={20} color="gray" onClick={() => { setValue('') }} /> : null}
            </button>
        </div>
    )
}

export default MailInput;