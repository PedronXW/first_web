import { Eye, EyeClosed, Lock, X } from "@phosphor-icons/react";
import { useState } from "react";

interface InputInterface{
    register:any
    focus:any
    resetError:any
    pattern_color:"background"|"secundary"
}

const PasswordInput = ({register, focus, resetError, pattern_color}: InputInterface) =>{

    const [value, setValue] = useState('');
    const [visibility, setVisibility]=useState(true);
    

    return(
        <div className={`w-full p-3 flex items-center ${pattern_color=="background"?"bg-background_color border-background_color":"bg-secundary_color border-secundary_color"} rounded-md`} onClick={(event: any) => {focus('password')}}>
            <figure className="h-5 w-5">
                <Lock aria-label="Icone de um cadeado." color="gray" size={20} />
            </figure>
            <input {...register('password')} aria-label="Campo de inserção de senha." type={visibility?'password':'text'} placeholder={"Password"} autoComplete="new-password" className={`font-medium text-sm ml-2 ${pattern_color=="background"?"bg-background_color":"bg-secundary_color"} outline-none border-none w-full pr-1`} onChange={(e) => { setValue(e.target.value); resetError(); }} value={value} />
            <button type="button" className="h-5 w-5 mr-4">
                {value.length == 0 ? null : visibility ? <EyeClosed aria-label="Icone de um olho, indicando um botão para tornar a senha invisivel" size={20} color="gray" onClick={() => { setVisibility(false) }} /> : <Eye size={20} aria-label="Icone de um olho, indicando um botão para tornar a senha visivel" color="gray" onClick={() => { setVisibility(true) }}/>}
            </button>
            <button type="reset" className="h-5 w-5">
                {value.length > 0 ? <X aria-label="Icone de um X para indicar o local de limpeza do campo de inserção" size={20} color="gray" onClick={() => { setValue('') }} /> : null}
            </button>
        </div>
    )
}

export default PasswordInput;