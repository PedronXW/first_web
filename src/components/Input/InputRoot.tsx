import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

interface InputRootInterface {
    pattern_color: string;
    id: string
    children: ReactNode
}

const InputRoot = ({ pattern_color, id, children }: InputRootInterface) => {

    const {setFocus} = useFormContext();

    return (
        <div className={`w-full cursor-pointer drop-shadow-md p-3 flex items-center bg-${pattern_color} border-${pattern_color} rounded-md`} onClick={(event: any) => { setFocus(id) }}>
            {children}
        </div>
    )
}

export default InputRoot;