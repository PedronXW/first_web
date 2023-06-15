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
                <button className="justify-center flex items-center bg-primary_color rounded-md p-5 py-3 drop-shadow-3xl cursor-pointer gap-2" onClick={(event:any)=>{setState(!state); event.stopPropagation()}}>
                    <Plus size={20} className="text-secundary_color"/>
                    <h1 className="text-md text-secundary_color">Adicionar</h1>
                </button>
                <li className={`w-[300px] h-[400px] absolute drop-shadow-3xl rounded-md top-20 bg-secundary_color border-2 border-primary_color ${state?"block":"hidden"} z-50`} onClick={(event:any)=>{event.stopPropagation()}}>
                    <div>Arroz</div>
                </li>
            </ul>
        </nav>
    )
}

export default AddRamalButton;