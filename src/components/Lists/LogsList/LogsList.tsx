import LogsTableHeader from '../../TableHeader/LogsTableHeader'
import LogCell from './LogCell'

const LogsList = () => {
  const logs = [1]

  return (
    <div className="flex flex-col w-full gap-4 md:px-12 pl-7 pr-6 ">
      <LogsTableHeader />
      {logs.map((log, key) => (
        <LogCell key={key} log={log} />
      ))}
    </div>
  )
}

export default LogsList
