import { useContext } from 'react'
import { Log, LogsContext } from '../../../contexts/LogsContext'
import LogsTableHeader from '../../TableHeader/LogsTableHeader'
import LogCell from './LogCell'

const LogsList = () => {
  const { logs } = useContext(LogsContext)

  return (
    <div className="flex flex-col w-full gap-4 md:px-12 pl-7 pr-6 ">
      <LogsTableHeader />
      {logs.map((log: Log) => (
        <LogCell key={log.id} log={log} />
      ))}
    </div>
  )
}

export default LogsList
