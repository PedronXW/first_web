import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface CallsContextInterface {
  children: ReactNode
}

export type Call = {}

interface CallsContext {
  calls: Call[]
  setCalls: (calls: Call[]) => void
}

export const CallsContext = createContext({} as CallsContext)

const CallsContextProvider = ({ children }: CallsContextInterface) => {
  const [calls, setCalls] = useState<Call[]>([])

  const fetchCalls = useCallback(async () => {
    const result = await api.get('calls')
    setCalls(result.data)
  }, [])

  useEffect(() => {
    fetchCalls()
  }, [])

  return (
    <CallsContext.Provider value={{ calls, setCalls }}>
      {children}
    </CallsContext.Provider>
  )
}
