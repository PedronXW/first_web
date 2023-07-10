import { Pen } from "@phosphor-icons/react";
import { ReactNode, useEffect, useRef, useState } from "react";

interface AddButtonInterface {
    children: ReactNode
}

const EditButton = ({children}:AddButtonInterface) => {

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

    return (
        <div  className={`fixed right-4 bottom-20 md:bottom-4  flex items-end gap-3 z-50`}>
            <div ref={formLayoutReference} className={`h-max w-fit bg-white drop-shadow-lg rounded-lg ${isOpen?"flex":"hidden"}`}>
                {children}
            </div>
            <div className="p-3 rounded-full drop-shadow-3xl bg-secundary_color h-min cursor-pointer" onClick={(event)=>{setIsOpen(!isOpen); event.stopPropagation();}}>
                <Pen size={22} className="text-primary_color" />
            </div>
        </div>
    )
}

export default EditButton;