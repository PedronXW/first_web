import { useContext, useEffect } from 'react'
import { Queue, QueuesContext } from '../../../contexts/QueuesContext'
import QueueCell from './QueueCell'

const QueuesList = () => {
  const { queues, fetchQueues } = useContext(QueuesContext)

  useEffect(() => {
    fetchQueues()
  }, [])

  return (
    <ul
      className={`grid ${
        queues.length < 3 ? 'lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-auto'
      } md:h-min h-full grid-cols-1 w-full md:px-12 pl-7 pr-6 pb-4 gap-10`}
    >
      {queues.map((queue: Queue) => (
        <QueueCell key={queue.id} queue={queue} />
      ))}
    </ul>
  )
}

export default QueuesList
