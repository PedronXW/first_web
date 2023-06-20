import { Plus } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const AddRamalButton=()=>{

    const [state, setState]=useState(false);
    const ref=useRef<any>();
    useEffect(()=>{
        document.addEventListener('mousedown', (event)=>{
            if( state===true && ref.current && !ref.current.contains(event.target)){
                setState(false);
            }
        });
    });
    return (
        <nav>
            <ul className='flex flex-col gap-2 justify-end items-end' ref={ref}>
                <button title="Adicionar" className="justify-center flex items-center bg-primary_color rounded-md p-5 py-3 drop-shadow-3xl cursor-pointer gap-2" onClick={(event:any)=>{setState(!state); event.stopPropagation()}}>
                    <Plus size={20} className="text-secundary_color"/>
                    <h1 className="text-md text-secundary_color">Adicionar</h1>
                </button>
            </ul>
        </nav>
    )
}

export default AddRamalButton;