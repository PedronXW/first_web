import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";


const SearchInput = () =>{

    const {register, setFocus} = useFormContext()

    const [state, setState] = useState(false);
    const [value, setValue] = useState('');
    
    return(
        <div className='w-full p-3 flex items-center bg-background_color border-background_color rounded-md' onClick={(event: any) => {setState(!state); setFocus('search')}}>
            <figure className="h-5 w-5">
                <MagnifyingGlass aria-label="Icone de um envelope." color="gray" size={20} />
            </figure>
            <input {...register('email')} type="text" placeholder={"Pesquisa"} autoComplete="off" className='font-medium text-sm ml-2 bg-background_color w-full pr-1' onChange={(e) => { setValue(e.target.value);}} value={value} />
            <button type="reset" className="h-5 w-5">
                {value.length > 0 ? <X aria-label="Icone de um X para indicar o local de limpeza do campo de inserção" size={20} color="gray" onClick={() => { setValue('') }} /> : null}
            </button>
        </div>
    )
}

export default SearchInput;