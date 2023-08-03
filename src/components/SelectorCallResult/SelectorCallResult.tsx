import { ArrowULeftDown, PhoneIncoming } from '@phosphor-icons/react'
import { Result } from '../../contexts/CallsContext'

interface SelectorCallResultInterface {
  result: Result
  setResult: (result: Result) => void
}

export function SelectorCallResult({
  result,
  setResult,
}: SelectorCallResultInterface) {
  function changeResultAnswerStatus() {
    setResult({
      ...result,
      answer: !result.answer,
    })
  }

  function changeResultTimeoutStatus() {
    setResult({
      ...result,
      timeout: !result.timeout,
    })
  }

  function changeResultBusyStatus() {
    setResult({
      ...result,
      busy: !result.busy,
    })
  }

  function changeResultCancelStatus() {
    setResult({
      ...result,
      cancel: !result.cancel,
    })
  }

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-primary_color font-bold text-lg">
        Resultado de chamada
      </h2>
      <div className="flex flex-col w-full">
        <div className="flex w-full h-min">
          <button
            type="button"
            onClick={changeResultAnswerStatus}
            className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${
              result.answer ? 'border-green-700' : 'border-primary_color'
            } rounded-tl-lg drop-shadow-3xl`}
          >
            <PhoneIncoming
              size={20}
              className={`-ml-[5px] ${
                result.answer ? 'text-green-700' : 'text-primary_color'
              }`}
            />
            <p
              className={`${
                result.answer ? 'text-green-700' : 'text-primary_color'
              }`}
            >
              Atendida
            </p>
          </button>
          <button
            type="button"
            onClick={changeResultTimeoutStatus}
            className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${
              result.timeout ? 'border-yellow-700' : 'border-primary_color'
            } rounded-tr-lg drop-shadow-3xl`}
          >
            <ArrowULeftDown
              size={20}
              className={`-ml-[5px] ${
                result.timeout ? 'text-yellow-700' : 'text-primary_color'
              }`}
            />
            <p
              className={`${
                result.timeout ? 'text-yellow-700' : 'text-primary_color'
              }`}
            >
              Perdida
            </p>
          </button>
        </div>
        <div className="flex w-full h-min">
          <button
            type="button"
            onClick={changeResultBusyStatus}
            className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${
              result.busy ? 'border-blue-700' : 'border-primary_color'
            } rounded-bl-lg drop-shadow-3xl`}
          >
            <PhoneIncoming
              size={20}
              className={`-ml-[5px] ${
                result.busy ? 'text-blue-700' : 'text-primary_color'
              }`}
            />
            <p
              className={`${
                result.busy ? 'text-blue-700' : 'text-primary_color'
              }`}
            >
              Ocupada
            </p>
          </button>
          <button
            type="button"
            onClick={changeResultCancelStatus}
            className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${
              result.cancel ? 'border-red-700' : 'border-primary_color'
            } rounded-br-lg drop-shadow-3xl`}
          >
            <ArrowULeftDown
              size={20}
              className={`-ml-[5px] ${
                result.cancel ? 'text-red-700' : 'text-primary_color'
              }`}
            />
            <p
              className={`${
                result.cancel ? 'text-red-700' : 'text-primary_color'
              }`}
            >
              Cancelada
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
