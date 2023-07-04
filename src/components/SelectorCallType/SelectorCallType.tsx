import { ArrowULeftDown, PhoneIncoming, PhoneOutgoing } from "@phosphor-icons/react";
import { useState } from "react";

export function SelectorCallType() {


    const [incommingCallsStatus, setIncommingCallsStatus] = useState<boolean>(true);
    const [outgoingCallsStatus, setOutgoingCallsStatus] = useState<boolean>(true);
    const [localCallsStatus, setLocalCallsStatus] = useState<boolean>(true);

    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-primary_color font-bold text-lg">Tipo de chamada</h2>
            <div className="flex w-full h-min">
                <button type="button" onClick={() => { setIncommingCallsStatus(!incommingCallsStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${incommingCallsStatus ? "border-green-700" : "border-primary_color"} rounded-l-lg drop-shadow-3xl`}>
                    <PhoneIncoming size={20} className={`-ml-[5px] ${incommingCallsStatus ? "text-green-700" : "text-primary_color"}`} />
                    <p className={`${incommingCallsStatus ? "text-green-700" : "text-primary_color"}`}>Recebida</p>
                </button>
                <button type="button" onClick={() => { setLocalCallsStatus(!localCallsStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${localCallsStatus ? "border-yellow-700" : "border-primary_color"} drop-shadow-3xl`}>
                    <ArrowULeftDown size={20} className={`-ml-[5px] ${localCallsStatus ? "text-yellow-700" : "text-primary_color"}`} />
                    <p className={`${localCallsStatus ? "text-yellow-700" : "text-primary_color"}`}>Interna</p>
                </button>
                <button type="button" onClick={() => { setOutgoingCallsStatus(!outgoingCallsStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${outgoingCallsStatus ? "border-blue-700" : "border-primary_color"} rounded-r-lg drop-shadow-3xl`}>
                    <PhoneOutgoing size={20} className={`-ml-[5px] ${outgoingCallsStatus ? "text-blue-700" : "text-primary_color"}`} />
                    <p className={`${outgoingCallsStatus ? "text-blue-700" : "text-primary_color"}`}>Realizada</p>
                </button>
            </div>
        </div>
    )
}