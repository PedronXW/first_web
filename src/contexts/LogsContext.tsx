import { enqueueSnackbar } from 'notistack'
import { ReactNode, createContext, useCallback, useState } from 'react'
import { usePersistanceStore } from '../hooks/usePersistanceStore'
import useResponseTranslation from '../hooks/useResponseTranslation'
import { api } from '../lib/axios'
import { VoipAccount } from './PersonsContext'

interface LogsContextInterface {
  children: ReactNode
}
export type Data = {
  id: string
  name: string
  email: string
  verified: boolean
  is_active: boolean
  Voip_Account: VoipAccount
}

export type Person = {
  id: string
  email: string
  name: string
}

export type Log = {
  id: string
  description: string
  entity: string
  operation: string
  edited: string
  created_at: Date
  data: Data
  personsId: string
  Person: Person
}

interface LogsContext {
  logs: Log[]
  setLogs: (logs: Log[]) => void
  fetchLogs: (name?: string, start?: Date, end?: Date) => void
}

export const LogsContext = createContext({} as LogsContext)

export const LogsProvider = ({ children }: LogsContextInterface) => {
  const { value } = usePersistanceStore()
  const [logs, setLogs] = useState<Log[]>([])
  const { translateError } = useResponseTranslation()

  const fetchLogs = useCallback(
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
          setLogs(response.data.data)
        })
        .catch((error) => {
          console.log(error)
          enqueueSnackbar(translateError(error.status), { variant: 'error' })
        })
    },
    [],
  )

  return (
    <LogsContext.Provider value={{ logs, setLogs, fetchLogs }}>
      {children}
    </LogsContext.Provider>
  )
}
