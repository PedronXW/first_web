import { enqueueSnackbar } from 'notistack'
import { ReactNode, createContext, useCallback, useState } from 'react'
import { usePersistanceStore } from '../hooks/usePersistanceStore'
import { api } from '../lib/axios'

interface QueuesContextInterface {
  children: ReactNode
}

export type Queue = {
  id: number
  name: string
  digit: number
  overflow: number
}

interface QueueContext {
  queues: Queue[]
  fetchQueues: () => void
  addQueue: (newQueue: Queue) => void
}

export const QueuesContext = createContext({} as QueueContext)

export const QueuesProvider = ({ children }: QueuesContextInterface) => {
  const { value } = usePersistanceStore()

  const [queues, setQueues] = useState<Queue[]>([])

  const fetchQueues = useCallback(async () => {
    const result = await api.get('queues', {
      headers: { Authorization: `Bearer ${value.token}` },
    })
    setQueues(result.data)
  }, [value.token])

  const addQueue = useCallback(
    async (newQueue: Queue) => {
      api
        .post('queues', newQueue, {
          headers: { Authorization: `Bearer ${value.token}` },
        })
        .then(() => {
          enqueueSnackbar('Fila criada com sucesso', { variant: 'success' })
          setQueues((state) => [newQueue, ...state])
        })
        .catch(() => {
          enqueueSnackbar('Falha ao criar fila', { variant: 'error' })
        })
    },
    [value.token],
  )

  return (
    <QueuesContext.Provider value={{ queues, fetchQueues, addQueue }}>
      {children}
    </QueuesContext.Provider>
  )
}
