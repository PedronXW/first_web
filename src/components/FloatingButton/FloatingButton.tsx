import { CheckFat, Pen, Plus, X } from "@phosphor-icons/react";
import { ReactNode, useEffect, useRef, useState } from "react";

interface FloatingButtonInterface {
    children: ReactNode,
    isAcceptable?: boolean
    type: 'add' | 'edit'
    action?: () => void
}

const FloatingButton = ({children, type, action, isAcceptable=false}:FloatingButtonInterface) => {

    const [isOpen, setIsOpen] = useState(false);

    const formLayoutReference = useRef<any>();
    useEffect(() => {
        document.addEventListener('click', (event) => {
            if (formLayoutReference.current != null && formLayoutReference.current.contains != null && !formLayoutReference.current.contains(event.target)) {
                if (isOpen === true && (!formLayoutReference.current.contains(event.target) || formLayoutReference.current !== event.target )) {
                    setIsOpen(false);
                    return;
                }
            }
        });
    });

    function handleAction(){
        action!()
    }

    return (
        <div  className={`fixed right-4 bottom-20 md:bottom-4 flex items-end gap-3 z-50`}>
            <div ref={formLayoutReference} className={`h-max w-fit bg-white drop-shadow-lg rounded-lg ${isOpen?"flex":"hidden"}`}>
                {children}
            </div>
            <div className="flex flex-col gap-4 ">
                {isAcceptable && isOpen?<div className="p-4 bg-secundary_color drop-shadow-3xl  rounded-full cursor-pointer" onClick={(event)=>{handleAction(); event.stopPropagation();}}><CheckFat size={22} className="text-primary_color" /></div>:<div />}  
                {!isOpen? 
                <button className="p-4 bg-secundary_color drop-shadow-3xl  rounded-full cursor-pointer" onClick={(event)=>{setIsOpen(!isOpen); event.stopPropagation();}}>
                    {type==="add"?<Plus size={22} className="text-primary_color" />:
                    <Pen size={22} className="text-primary_color" />}</button>:
                <button type="button"  onClick={(event)=>{setIsOpen(!isOpen);event.stopPropagation();}} className="p-4 bg-secundary_color drop-shadow-3xl  rounded-full cursor-pointer"><X size={22} className="text-primary_color" /></button>}
            </div>
        </div>
    )
}

export default FloatingButton;