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

export type Direction = {
  outgoing: boolean
  incomming: boolean
  internal: boolean
}

export type Result = {
  answer: boolean
  timeout: boolean
  busy: boolean
  cancel: boolean
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
  fetchCalls: (
    name?: string,
    direction?: Direction,
    result?: Result,
    start?: Date,
    end?: Date,
  ) => void
}

export const CallsContext = createContext({} as CallsContext)

export const CallsProvider = ({ children }: CallsContextInterface) => {
  const { value } = usePersistanceStore()
  const [calls, setCalls] = useState<Call[]>([])
  const { translateError } = useResponseTranslation()

  function directionTransform(direction: Direction) {
    const directionQuery = []

    if (direction?.incomming) {
      directionQuery.push('incomming')
    }
    if (direction?.outgoing) {
      directionQuery.push('outgoing')
    }
    if (direction?.internal) {
      directionQuery.push('local')
    }
    return directionQuery
  }

  function resultTransform(result: Result) {
    const resultQuery = []

    if (result?.answer) {
      resultQuery.push('answer')
    }
    if (result?.timeout) {
      resultQuery.push('timeout')
    }
    if (result?.busy) {
      resultQuery.push('busy')
    }
    if (result?.cancel) {
      resultQuery.push('cancel')
    }
    return resultQuery
  }

  const fetchCalls = useCallback(
    async (
      name?: string,
      direction?: Direction,
      result?: Result,
      start?: Date,
      end?: Date,
    ) => {
      await api
        .get('calls', {
          headers: { Authorization: `Bearer ${value.token}` },
          params: {
            direction: directionTransform(direction!),
            result: resultTransform(result!),
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
