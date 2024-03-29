import { useContext } from 'react'
import { CallsContext } from '../../../contexts/CallsContext'
import CallsTableHeader from '../../TableHeader/CallsTableHeader'
import CallCell from './CallCell'

const CallsList = () => {
  const { calls } = useContext(CallsContext)

  return (
    <div className="flex flex-col w-full gap-4 md:px-12 pl-7 pr-6 ">
      <CallsTableHeader />
      {calls.map((call, key) => (
        <CallCell key={key} call={call} />
      ))}
    </div>
  )
}

export default CallsList
