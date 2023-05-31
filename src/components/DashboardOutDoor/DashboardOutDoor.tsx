import { CaretDown, CaretUp } from "@phosphor-icons/react"
import { useState } from "react"

interface DashboardOutDoorInterface {
    name: string,
    quantity_actually: number
    quantity_past: number
    icon: any
}

const DashboardOutDoor = ({ name, quantity_actually, quantity_past, icon }: DashboardOutDoorInterface) => {

    const [diff, setDiff] = useState(
        quantity_actually > quantity_past ?
            quantity_actually*100 / quantity_past :
            -quantity_past*100 / quantity_actually
    );

    return (
        <div className="h-36 flex w-full justify-end">
            <div className="h-14 w-14 absolute z-10 bg-secundary_color hidden rounded-full md:flex justify-center items-center">
                <div className="h-10 w-10 bg-primary_color rounded-full drop-shadow-3xl flex justify-center items-center">
                    {icon}
                </div>
            </div>
            <div className="h-5/6 w-full rounded-lg self-end border-[1px] border-primary_color bg-white drop-shadow-3xl align-bottom md:mr-6">
                <div className="h-2/4 w-full bg-primary_color rounded-t-md drop-shadow-3xl flex items-center pl-5 pr-5 justify-between">
                    <h3 className="text-secundary_color font-medium">{name}</h3>
                    <div className="h-10 w-10 bg-primary_color flex justify-center items-center md:hidden">
                        {icon}
                    </div>
                </div>
                <div className="h-2/4 w-full bg-secundary_color rounded-b-lg flex items-center justify-center">
                    <div className="h-full w-1/2 flex justify-start items-center pl-3">
                        <div className="h-8 w-8 flex justify-center items-center">
                            {quantity_actually > quantity_past ?<CaretUp className="text-green-600"/>:<CaretDown className="text-red-600"/>}
                        </div>
                        <h3 className={`font-medium w-1/2 ${quantity_actually > quantity_past ? "text-green-600":"text-red-600"}`}>{diff+"%"}</h3>
                    </div>
                    <div className="h-full flex justify-end items-center w-1/2 pr-7">
                        <h3 className="text-primary_color font-medium text-right w-1/2">{quantity_actually}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardOutDoor;