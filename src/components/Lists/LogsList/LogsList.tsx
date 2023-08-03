import { useContext } from 'react'
import { Log, LogsContext } from '../../../contexts/LogsContext'
import LogsTableHeader from '../../TableHeader/LogsTableHeader'
import LogCellLarge from './LogCellLarge'
import LogCellReducted from './LogCellReducted'

const LogsList = () => {
  const { logs } = useContext(LogsContext)

  console.log(logs)
  return (
    <div className="">
      <div className="flex sm:hidden md:flex lg:hidden flex-col w-full gap-4 md:px-12 pl-7 pr-6">
        {logs.map((log: Log) => (
          <LogCellReducted key={log.id} log={log} />
        ))}
      </div>
      <div className="hidden sm:flex md:hidden lg:flex flex-col w-full gap-4 md:px-12 pl-7 pr-6">
        <LogsTableHeader />
        {logs.map((log: Log) => (
          <LogCellLarge key={log.id} log={log} />
        ))}
      </div>
    </div>
  )
}

export default LogsList
