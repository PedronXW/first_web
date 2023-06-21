import { PhoneCall } from "@phosphor-icons/react";

interface DashboardCallsCarouselCellInterface {
    call: any;
}

const DashboardCallsCarouselCell = ({ call }: DashboardCallsCarouselCellInterface) => {
    return (
        <div className="h-52 w-full flex">
            <div className="h-full w-full grow-1 bg-white border-[1px] border-primary_color flex flex-col rounded-md p-6 px-5 justify-between">
                <div className="h-min w-full flex justify-between">
                    <PhoneCall size={20} className="text-green-800"/>
                    <h2 className="text-primary_color font-bold text-sm">18:04:27</h2>
                </div>
                <div className="h-min w-full flex flex-col gap-2">
                    <h2 className="text-primary_color font-bold text-sm">Administrativo</h2>
                    <h3 className="text-primary_color font-medium text-xs">O setor administrativo recebeu uma chamada do número: (35) 99999-9999</h3>
                </div>
            </div>
            <div className="h-full w-6 bg-white"></div>
        </div>

    )
}

export default DashboardCallsCarouselCell