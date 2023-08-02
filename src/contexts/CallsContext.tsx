import { enqueueSnackbar } from 'notistack'
import { ReactNode, createContext, useCallback, useState } from 'react'
import { usePersistanceStore } from '../hooks/usePersistanceStore'
import useResponseTranslation from '../hooks/useResponseTranslation'
import { api } from '../lib/axios'

interface CallsContextInterface {
  children: ReactNode
}

export type PersonClass = {
  id: string
  email: string
  name: string
}

export type Person = {
  exten: number
  Person: PersonClass
}

export type Queue = {
  id: number
  name: string
  digit: number
  overflow: number
}

export type Call = {
  id: number
  direction: string
  time_call: Date
  time_log: Date
  src: string
  dst: string
  answered: string
  dialed: string
  result: string
  unique_id: string
}

export type CallSearch = {
  data: Call[]
  count: number
  queues: Queue[]
  persons: Person[]
}

interface CallsContext {
  calls: Call[]
  fetchCalls: (direction?: string[], result?: string[], name?: string) => void
}

export const CallsContext = createContext({} as CallsContext)

const CallsProvider = ({ children }: CallsContextInterface) => {
  const { value } = usePersistanceStore()
  const [calls, setCalls] = useState<Call[]>([])
  const { translateError } = useResponseTranslation()

  const fetchCalls = useCallback(
    async (direction?: string[], result?: string[], name?: string) => {
      await api
        .get('calls', {
          headers: { Authorization: `Bearer ${value.token}` },
        })
        .then((response) => {
          setCalls(response.data.data)
        })
        .catch((error) => {
          enqueueSnackbar(translateError(error.status), { variant: 'error' })
        })
    },
    [],
  )

  return (
    <CallsContext.Provider value={{ calls, fetchCalls }}>
      {children}
    </CallsContext.Provider>
  )
}
