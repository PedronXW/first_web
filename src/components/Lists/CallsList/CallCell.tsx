import { PhoneCall } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

interface CallCellInterface {
    call: any;
}

const CallCell = ({ call }: CallCellInterface) => {

    const navigate = useNavigate();

    return (
        <section className="min-h-[144px] flex flex-col w-full justify-end items-end">
            <figure className="min-h-[54px] min-w-[54px] bg-primary_color relative z-10 right-4 border-[8px] border-background_color rounded-full flex justify-center items-center">
                <PhoneCall size={20} className="text-green-500" />
            </figure>
            <button onClick={() => { navigate('1687271212.464') }} className="h-5/6 w-full rounded-lg self-end bg-secundary_color drop-shadow-3xl align-bottom -mt-7 cursor-pointer">
                <div className="h-2/4 w-full bg-primary_color rounded-t-md drop-shadow-3xl flex items-center pl-5 pr-5 justify-between">
                    <h2 className="text-secundary_color font-medium">Administrativo</h2>
                </div>
                <div className="h-2/4 w-full bg-secundary_color rounded-b-lg flex items-center justify-center pl-5">
                    <h2 className="text-primary_color font-medium h-full text-sm flex justify-start items-center pr-7 w-1/2">18:04:23</h2>
                    <h2 className="text-primary_color font-medium h-full text-sm flex justify-end items-center pr-7 w-1/2">(35)99124-4060</h2>
                </div>
            </button>
        </section>
    )
}

export default CallCell;