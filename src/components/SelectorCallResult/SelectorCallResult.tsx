import { ArrowULeftDown, PhoneIncoming } from "@phosphor-icons/react";
import { useState } from "react";

export function SelectorCallResult() {


    const [answeredCallStatus, setAnsweredCallStatus] = useState<boolean>(true);
    const [busyCallStatus, setBusyCallStatus] = useState<boolean>(true);
    const [timeoutedCallStatus, setTimeoutedCallStatus] = useState<boolean>(true);
    const [canceledCallStatus, setCanceledCallStatus] = useState<boolean>(true);

    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-primary_color font-bold text-lg">Resultado de chamada</h2>
            <div className="flex flex-col w-full">
                <div className="flex w-full h-min">
                    <button type="button" onClick={() => { setAnsweredCallStatus(!answeredCallStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${answeredCallStatus ? "border-green-700" : "border-primary_color"} rounded-tl-lg drop-shadow-3xl`}>
                        <PhoneIncoming size={20} className={`-ml-[5px] ${answeredCallStatus ? "text-green-700" : "text-primary_color"}`} />
                        <p className={`${answeredCallStatus ? "text-green-700" : "text-primary_color"}`}>Atendida</p>
                    </button>
                    <button type="button" onClick={() => { setTimeoutedCallStatus(!timeoutedCallStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${timeoutedCallStatus ? "border-yellow-700" : "border-primary_color"} rounded-tr-lg drop-shadow-3xl`}>
                        <ArrowULeftDown size={20} className={`-ml-[5px] ${timeoutedCallStatus ? "text-yellow-700" : "text-primary_color"}`} />
                        <p className={`${timeoutedCallStatus ? "text-yellow-700" : "text-primary_color"}`}>Perdida</p>
                    </button>
                </div>
                <div className="flex w-full h-min">
                    <button type="button" onClick={() => { setBusyCallStatus(!busyCallStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${busyCallStatus ? "border-blue-700" : "border-primary_color"} rounded-bl-lg drop-shadow-3xl`}>
                        <PhoneIncoming size={20} className={`-ml-[5px] ${busyCallStatus ? "text-blue-700" : "text-primary_color"}`} />
                        <p className={`${busyCallStatus ? "text-blue-700" : "text-primary_color"}`}>Ocupada</p>
                    </button>
                    <button type="button" onClick={() => { setCanceledCallStatus(!canceledCallStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${canceledCallStatus ? "border-red-700" : "border-primary_color"} rounded-br-lg drop-shadow-3xl`}>
                        <ArrowULeftDown size={20} className={`-ml-[5px] ${canceledCallStatus ? "text-red-700" : "text-primary_color"}`} />
                        <p className={`${canceledCallStatus ? "text-red-700" : "text-primary_color"}`}>Cancelada</p>
                    </button>
                </div>
            </div>
        </div>
    )
}