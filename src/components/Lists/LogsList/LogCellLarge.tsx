import { Log } from '../../../contexts/LogsContext'

interface LogCellInterface {
  log: Log
}

const LogCellLarge = ({ log }: LogCellInterface) => {
  return (
    <div className="min-h-[54px] w-full bg-secundary_color drop-shadow-3xl rounded-lg flex flex-row items-center justify-around pl-6 pr-7">
      <span className="text-primary_color font-medium h-full text-sm items-center w-1/4 ml-4 flex">
        {log.operation}
      </span>
      <span className="text-primary_color font-medium h-full text-sm items-center w-1/2 hidden sm:flex md:hidden lg:flex">
        {log.Person.name}
      </span>
      <span className="text-primary_color font-medium h-full whitespace-nowrap text-sm flex justify-center items-center w-1/2">
        {new Date(log.created_at).toLocaleDateString('pt-BR', {
          minute: 'numeric',
          hour: 'numeric',
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
        })}
      </span>
      <span className="text-primary_color font-medium h-full whitespace-nowrap text-sm flex justify-center items-center w-1/2">
        {log.operation}
      </span>
      <span className="text-primary_color ml-3 font-medium text-sm h-full flex justify-start items-center w-1/2">
        {log.description}
      </span>
    </div>
  )
}

export default LogCellLarge
