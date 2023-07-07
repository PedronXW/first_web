import { ReactNode, createContext, useState } from "react";
import { useFormContext } from "react-hook-form";

interface InputRootInterface {
    pattern_color: string;
    id: string
    initial_visibility?: boolean,
    children: ReactNode
}

interface InputContextInterface {
    id: string,
    value: string,
    changeValue: (value: string) => void,
    visibility: boolean,
    changeVisibility: (visibility: boolean) => void,
    pattern_color: string
}

export const InputContext = createContext({} as InputContextInterface);

const InputRoot = ({ pattern_color, id, children, initial_visibility = true }: InputRootInterface) => {

    const [value, setValue] = useState('');
    const [visibility, setVisibility] = useState(initial_visibility);

    const { setFocus } = useFormContext();

    return (
        <InputContext.Provider value={{ value, visibility, pattern_color, changeValue: setValue, changeVisibility: setVisibility, id }}>
            <div className={`w-full cursor-pointer ${pattern_color=="background_color"?"drop-shadow-none":"drop-shadow-md"} p-3 flex items-center bg-${pattern_color} border-${pattern_color} rounded-md`} onClick={(event: any) => { setFocus(id) }}>
                {children}
            </div>
        </InputContext.Provider>
    )
}

export default InputRoot;