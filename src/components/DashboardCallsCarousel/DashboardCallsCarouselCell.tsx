import { PhoneCall } from '@phosphor-icons/react'

interface DashboardCallsCarouselCellInterface {
  call: any
}

const DashboardCallsCarouselCell = ({
  call,
}: DashboardCallsCarouselCellInterface) => {
  return (
    <div className="h-52 w-full flex cursor-pointer">
      <div className=" w-full grow-1 bg-secundary_color flex flex-col rounded-md p-6 px-5 justify-between drop-shadow-3xl m-1">
        <header className="h-min w-full flex justify-between">
          <PhoneCall size={20} className="text-green-800" />
          <time
            dateTime="2022/08/20 - 22:40:33"
            title="2022/08/20 - 22:40:33"
            className="text-primary_color font-bold text-sm"
          >
            18:04:27
          </time>
        </header>
        <div className="h-min w-full flex flex-col gap-2">
          <strong className="text-primary_color font-bold text-sm">
            Administrativo
          </strong>
          <span className="text-primary_color font-medium text-xs">
            O setor administrativo recebeu uma chamada do número: (35)
            99999-9999
          </span>
        </div>
      </div>
      <div className="h-full w-2 bg-background_color"></div>
    </div>
  )
}

export default DashboardCallsCarouselCell
