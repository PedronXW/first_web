import { CaretDown, CaretUp } from "@phosphor-icons/react"
import { useState } from "react"

interface DashboardOutDoorInterface {
    name: string,
    quantity_actually: number
    quantity_past: number
    icon: any
}

const DashboardOutDoor = ({ name, quantity_actually, quantity_past, icon }: DashboardOutDoorInterface) => {

    const [diff] = useState(
        quantity_actually > quantity_past ?
            quantity_actually*100 / quantity_past :
            -quantity_past*100 / quantity_actually
    );

    return (
        <section title={`Outdoor ${name}`} className="min-h-[144px] flex flex-col w-full justify-end items-end">
            <div className="min-h-[56px] min-w-[56px] relative z-10 bg-secundary_color rounded-full flex justify-center items-center right-4">
                <figure className="h-10 w-10 bg-gradient-to-l from-primary_color to-gray-600 rounded-full drop-shadow-3xl flex justify-center items-center">
                    {icon}
                </figure>
            </div>
            <div className="h-5/6 w-full rounded-lg self-end border-[1px] border-primary_color bg-white drop-shadow-3xl align-bottom -mt-7">
                <div className="h-2/4 w-full bg-gradient-to-r from-primary_color to-gray-600 rounded-t-md drop-shadow-3xl flex items-center pl-5 pr-5 justify-between">
                    <h2 className="text-secundary_color font-medium">{name}</h2>
                </div>
                <div className="h-2/4 w-full bg-secundary_color rounded-b-lg flex items-center justify-center">
                    <div className="h-full w-1/2 flex justify-start items-center pl-3">
                        <figure className="h-8 w-8 flex justify-center items-center">
                            {quantity_actually > quantity_past ?<CaretUp className="text-green-600"/>:<CaretDown className="text-red-600"/>}
                        </figure>
                        <h2 className={`font-medium w-1/2 ${quantity_actually > quantity_past ? "text-green-600":"text-red-600"}`}>{diff+"%"}</h2>
                    </div>
                    <h2 className="text-primary_color font-medium h-full flex justify-end items-center pr-7 w-1/2">{quantity_actually}</h2>
                </div>
            </div>
        </section>
    )
}

export default DashboardOutDoor;