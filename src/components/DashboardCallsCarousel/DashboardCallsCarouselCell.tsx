import { PhoneCall } from "@phosphor-icons/react";

interface DashboardCallsCarouselCellInterface {
    call: any;
}

const DashboardCallsCarouselCell = ({ call }: DashboardCallsCarouselCellInterface) => {
    return (
        <div className="h-52 w-full flex">
            <div className="h-full w-full grow-1 bg-white border-[1px] border-primary_color flex flex-col rounded-md p-6 px-5 justify-between">
                <PhoneCall size={20} className="text-green-800"/>
                <div className="h-min w-full flex">
                    <h2 className="text-primary_color font-bold text-sm">Administrativo</h2>
                </div>
            </div>
            <div className="h-full w-6 bg-white"></div>
        </div>

    )
}

export default DashboardCallsCarouselCell