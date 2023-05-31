
interface DashboardOutDoorInterface {
    name: string,
    quantity_actually: number
    quantity_past: number
    icon: any
}

const DashboardOutDoor = ({ name, quantity_actually, quantity_past, icon }: DashboardOutDoorInterface) => {
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
                <div className="h-2/4 w-full bg-secundary_color rounded-b-lg">

                </div>
            </div>
        </div>
    )
}

export default DashboardOutDoor;