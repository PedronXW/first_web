import {
  ArrowULeftDown,
  PhoneIncoming,
  PhoneOutgoing,
} from '@phosphor-icons/react'
import { Direction } from '../../contexts/CallsContext'

interface SelectorCallTypeInterface {
  type: Direction
  changeType: (type: Direction) => void
}

export function SelectorCallType({
  type,
  changeType,
}: SelectorCallTypeInterface) {
  function handleChangeIncommingStatus() {
    changeType({
      ...type,
      incomming: !type.incomming,
    })
  }

  function handleChangeInternalStatus() {
    changeType({
      ...type,
      internal: !type.internal,
    })
  }

  function handleChangeOutgoingStatus() {
    changeType({
      ...type,
      outgoing: !type.outgoing,
    })
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-primary_color font-bold text-lg">Tipo de chamada</h2>
      <div className="flex w-full h-min">
        <button
          type="button"
          onClick={handleChangeIncommingStatus}
          className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${
            type.incomming ? 'border-green-700' : 'border-primary_color'
          } rounded-l-lg drop-shadow-3xl`}
        >
          <PhoneIncoming
            size={20}
            className={`-ml-[5px] ${
              type.incomming ? 'text-green-700' : 'text-primary_color'
            }`}
          />
          <p
            className={`${
              type.incomming ? 'text-green-700' : 'text-primary_color'
            }`}
          >
            Recebida
          </p>
        </button>
        <button
          type="button"
          onClick={handleChangeInternalStatus}
          className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${
            type.internal ? 'border-yellow-700' : 'border-primary_color'
          } drop-shadow-3xl`}
        >
          <ArrowULeftDown
            size={20}
            className={`-ml-[5px] ${
              type.internal ? 'text-yellow-700' : 'text-primary_color'
            }`}
          />
          <p
            className={`${
              type.internal ? 'text-yellow-700' : 'text-primary_color'
            }`}
          >
            Interna
          </p>
        </button>
        <button
          type="button"
          onClick={handleChangeOutgoingStatus}
          className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${
            type.outgoing ? 'border-blue-700' : 'border-primary_color'
          } rounded-r-lg drop-shadow-3xl`}
        >
          <PhoneOutgoing
            size={20}
            className={`-ml-[5px] ${
              type.outgoing ? 'text-blue-700' : 'text-primary_color'
            }`}
          />
          <p
            className={`${
              type.outgoing ? 'text-blue-700' : 'text-primary_color'
            }`}
          >
            Realizada
          </p>
        </button>
      </div>
    </div>
  )
}
