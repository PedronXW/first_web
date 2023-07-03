import { PhoneCall } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "../../AudioPlayer/AudioPlayer";

interface CallCellInterface {
    call: any;
}

const CallCell = ({ call }: CallCellInterface) => {

    const navigate = useNavigate();

    return (
        <div className="min-h-[190px] sm:min-h-[80px] md:min-h-[190px] lg:min-h-[80px] flex flex-col w-full justify-end items-end">
            <figure className="min-h-[54px] min-w-[54px] sm:hidden flex  md:flex lg:hidden bg-primary_color relative z-10 right-4 border-[8px] border-background_color rounded-full justify-center items-center">
                <PhoneCall size={20} className="text-green-500" />
            </figure>
            <button className="h-5/6 w-full rounded-lg self-end bg-secundary_color drop-shadow-3xl align-bottom -mt-7 cursor-pointer">
                <header className="h-[70px] w-full sm:hidden md:flex lg:hidden  bg-primary_color rounded-t-md drop-shadow-3xl flex items-center pl-5 pr-5 justify-between">
                    <h3 className="text-secundary_color font-medium">Administrativo</h3>
                </header>
                <div className="h-full grow-1 w-full bg-secundary_color rounded-b-lg sm:rounded-lg md:rounded-b-lg lg:rounded-lg flex sm:flex-row md:flex-col flex-col lg:flex-row items-center justify-around pl-5 pr-5 lg:pr-2">
                    <span className="text-primary_color font-medium h-full text-sm items-center w-1/2 hidden sm:flex md:hidden lg:flex">Administrativo</span>
                    <div className=" w-full bg-secundary_color rounded-b-lg flex items-center justify-center sm:mt-0 md:mt-2 lg:mt-0 mt-2">
                        <time className="text-primary_color font-medium h-full text-sm flex justify-start items-center pr-7 w-1/2">18:04:23</time>
                        <span className="text-primary_color font-medium h-full text-sm flex justify-end items-center w-1/2">(35)99124-4060</span>
                    </div>
                    <AudioPlayer audio_id="1687271212.464" client="d471de34-7bca-46dd-acde-e173c85813ff" />
                </div>

            </button>
        </div>
    )
}

export default CallCell;