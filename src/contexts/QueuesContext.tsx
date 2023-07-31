import { enqueueSnackbar } from 'notistack'
import { ReactNode, createContext, useCallback, useState } from 'react'
import { usePersistanceStore } from '../hooks/usePersistanceStore'
import useResponseTranslation from '../hooks/useResponseTranslation'
import { api } from '../lib/axios'

interface QueuesContextInterface {
  children: ReactNode
}

interface EditMembersProps {
  members: Array<number>
  id: number
  name: string
  digit: number
  overflow: number
}

export type Queue = {
  id: number
  name: string
  digit: number
  overflow: number
  Voip_Account: Array<any>
}

interface QueueContext {
  queues: Queue[]
  fetchQueues: () => void
  addQueue: (newQueue: Queue) => void
  editQueue: (editedQueue: EditMembersProps) => void
  editMembers: (editMembersProps: EditMembersProps) => void
}

export const QueuesContext = createContext({} as QueueContext)

export const QueuesProvider = ({ children }: QueuesContextInterface) => {
  const { traslateSuccess, translateError } = useResponseTranslation()

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
        .then((response) => {
          enqueueSnackbar(traslateSuccess(response.status), {
            variant: 'success',
          })
          setQueues((state) => [newQueue, ...state])
        })
        .catch((error) => {
          enqueueSnackbar(translateError(error.status), { variant: 'error' })
        })
    },
    [value.token],
  )

  const editQueue = useCallback(async (queue: EditMembersProps) => {
    api
      .patch(
        `queues/${queue.id}`,
        {
          name: queue.name,
          digit: queue.digit,
          overflow: queue.overflow,
        },
        {
          headers: { Authorization: `Bearer ${value.token}` },
        },
      )
      .then((response) => {
        editMembers(queue)
      })
      .catch((error) => {
        enqueueSnackbar(translateError(error.status), { variant: 'error' })
      })
  }, [])

  const editMembers = useCallback(
    async (editMembersProps: EditMembersProps) => {
      api
        .patch(
          `queues/members/${editMembersProps.id}`,
          {
            persons: editMembersProps.members,
          },
          {
            headers: { Authorization: `Bearer ${value.token}` },
          },
        )
        .then((response) => {
          setQueues((state) => {
            const newState = state.map((person) => {
              if (person.id === response.data.id) {
                return {
                  ...response.data,
                }
              }
              return person
            })
            return newState
          })
          enqueueSnackbar(traslateSuccess(response.status), {
            variant: 'success',
          })
        })
        .catch((error) => {
          enqueueSnackbar(translateError(error.status), { variant: 'error' })
        })
    },
    [],
  )

  return (
    <QueuesContext.Provider
      value={{ queues, fetchQueues, addQueue, editQueue, editMembers }}
    >
      {children}
    </QueuesContext.Provider>
  )
}
