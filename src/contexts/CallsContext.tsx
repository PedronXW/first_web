import { enqueueSnackbar } from 'notistack'
import { ReactNode, createContext, useCallback, useState } from 'react'
import { usePersistanceStore } from '../hooks/usePersistanceStore'
import useResponseTranslation from '../hooks/useResponseTranslation'
import { api } from '../lib/axios'

interface CallsContextInterface {
  children: ReactNode
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

interface CallsContext {
  calls: Call[]
  fetchCalls: (name?: string, start?: Date, end?: Date) => void
}

export const CallsContext = createContext({} as CallsContext)

const CallsProvider = ({ children }: CallsContextInterface) => {
  const { value } = usePersistanceStore()
  const [calls, setCalls] = useState<Call[]>([])
  const { translateError } = useResponseTranslation()

  const fetchCalls = useCallback(
    async (name?: string, start?: Date, end?: Date) => {
      await api
        .get('audit/easy', {
          headers: { Authorization: `Bearer ${value.token}` },
          params: {
            name,
            start_time: start,
            end_time: end,
          },
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
