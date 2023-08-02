import { PhoneCall } from '@phosphor-icons/react'
import { useContext } from 'react'
import { Call } from '../../contexts/CallsContext'
import { DashboardContext } from '../../contexts/DashboardContext'

interface DashboardCallsCarouselCellInterface {
  call: Call
}

const DashboardCallsCarouselCell = ({
  call,
}: DashboardCallsCarouselCellInterface) => {
  const { todayCalls } = useContext(DashboardContext)

  if (todayCalls.data.length === 0) return <div></div>

  function searchReceiverData() {
    console.log(todayCalls)

    return (
      'O ramal ' +
      call.src +
      (call.direction === 'incomming' ? ' recebeu' : ' realizou') +
      ' uma chamada.'
    )
  }

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
            {new Date(call.time_call).toDateString()}
          </time>
        </header>
        <div className="h-min w-full flex flex-col gap-2">
          <strong className="text-primary_color font-bold text-sm">
            {call.src +
              ' - ' +
              (call.direction === 'incomming' ? 'Recebida' : 'Realizada')}
          </strong>
          <span className="text-primary_color font-medium text-xs">
            {searchReceiverData()}
          </span>
        </div>
      </div>
    </div>
  )
}

export default DashboardCallsCarouselCell
