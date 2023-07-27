import { PhoneCall } from '@phosphor-icons/react'
import { Log } from '../../../contexts/LogsContext'

interface LogCellInterface {
  log: Log
}

const LogCellReducted = ({ log }: LogCellInterface) => {
  return (
    <div className="min-h-[200px] flex flex-col w-full items-end">
      <figure className="min-h-[54px] min-w-[54px] flex bg-primary_color relative z-10 right-4 border-[8px] border-background_color rounded-full justify-center items-center">
        <PhoneCall size={20} className="text-green-500" />
      </figure>
      <div className="h-min w-full rounded-lg self-end bg-secundary_color drop-shadow-3xl align-bottom lg:mt-0 md:-mt-7 sm:mt-0 xs:-mt-7">
        <header className="h-[70px] w-full flex sm:hidden md:flex lg:hidden  bg-primary_color rounded-t-md drop-shadow-3xl  items-center pl-5 pr-5 justify-between">
          <h3 className="text-secundary_color font-medium">
            {log.Person.name}
          </h3>
        </header>
        <div className="min-h-[100px] w-full bg-secundary_color rounded-b-lg flex flex-col pl-5 pr-5 justify-center">
          <div className="w-full flex justify-between h-10 items-center">
            <div className="flex justify-start items-center gap-1">
              <span className="text-primary_color font-medium h-full whitespace-nowrap text-sm">
                Horário:
              </span>
              <span className="text-primary_color font-medium h-full whitespace-nowrap text-sm flex">
                {new Date(log.created_at).toLocaleDateString('pt-BR', {
                  minute: 'numeric',
                  hour: 'numeric',
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex justify-start items-center gap-1">
              <span className="text-primary_color font-medium h-full whitespace-nowrap text-sm">
                Tipo:
              </span>
              <span className="text-primary_color font-medium h-full whitespace-nowrap text-sm flex">
                {log.operation}
              </span>
            </div>
          </div>
          <span className="text-primary_color font-medium text-sm flex justify-start items-center h-10">
            Descrição: {log.description}
          </span>
        </div>
      </div>
    </div>
  )
}

export default LogCellReducted
