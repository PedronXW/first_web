interface DashboardOutDoorInterface {
  name: string
  data: string
  icon: any
}

const PersonInfoCard = ({ name, data, icon }: DashboardOutDoorInterface) => {
  return (
    <div className="min-h-[120px] w-full flex flex-col w-full justify-end items-end drop-shadow-3xl">
      <header className="h-2/4 w-full bg-primary_color rounded-t-md flex items-center pl-5 pr-5 justify-between">
        <h3 className="text-secundary_color font-medium">{name}</h3>
        {icon}
      </header>
      <div className="h-2/4 w-full bg-secundary_color rounded-b-lg flex items-center justify-end overflow-hidden">
        <p className="text-primary_color font-medium h-full flex justify-end items-center mr-7 pl-5 truncate whitespace-nowrap overflow-hidden">
          {data}
        </p>
      </div>
    </div>
  )
}

export default PersonInfoCard
