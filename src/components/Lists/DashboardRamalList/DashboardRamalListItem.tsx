interface DashboardRamalListItemInterface {
    ramal: any
}

const DashboardRamalListItem = ({ ramal }: DashboardRamalListItemInterface) => {
    return (
        <div className="h-min w-full bg-secundary_color border-b-[1px] border-primary_color flex p-3 py-2 items-center justify-between">
            <div>
                <h2 className="text-primary_color font-medium">{ramal}</h2>
                <h3 className="text-primary_color font-regular text-xs">ID 15651615165</h3>
            </div>
            <div>
                <h3 className="text-primary_color font-medium">2</h3>
            </div>
        </div>
    )
}

export default DashboardRamalListItem;