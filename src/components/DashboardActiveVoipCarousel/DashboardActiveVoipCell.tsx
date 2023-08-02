import { PhoneCall } from '@phosphor-icons/react'
import { Voip } from '../../contexts/DashboardContext'

interface DashboardActiveVoipCarouselCellInterface {
  voip: Voip
}

const DashboardActiveVoipCarouselCell = ({
  voip,
}: DashboardActiveVoipCarouselCellInterface) => {
  return (
    <div className="h-52 w-full flex cursor-pointer">
      <div className=" w-full grow-1 bg-secundary_color flex flex-col rounded-md p-6 px-5 justify-between drop-shadow-3xl m-1">
        <header className="h-min w-full flex justify-between">
          <PhoneCall size={20} className="text-green-800" />
        </header>
        <div className="h-min w-full flex flex-col justify-end">
          <strong className="text-primary_color font-bold text-sm text-end">
            {voip.person + ' - ' + voip.voip}
          </strong>
          <span className="text-gray-400 font-medium text-xs text-end">
            {voip.status ? 'Ativo' : 'Inativo'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default DashboardActiveVoipCarouselCell
