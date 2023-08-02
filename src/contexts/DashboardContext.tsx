import { ReactNode, createContext, useState } from 'react'
import { usePersistanceStore } from '../hooks/usePersistanceStore'
import { api } from '../lib/axios'
import { CallSearch } from './CallsContext'

interface DashboardContextInterface {
  children: ReactNode
}

export type Voip = {
  person: string
  voip: number
  status: boolean
}

export type AmountCall = {
  day: Date
  amount: number
}

export type Summary = {
  answered: number
  missed: number
  received: number
}

export type DashboardResume = {
  summary: Summary
  amount_calls: AmountCall[]
}

interface DashboardContext {
  existingVoips: Array<Voip>
  dashboardResume?: DashboardResume
  fetchDashboardResume: () => void
  fetchExistingVoips: () => void
  fetchTodayCalls: () => void
  todayCalls: CallSearch
}

export const DashboardContext = createContext({} as DashboardContext)

const DashboardProvider = ({ children }: DashboardContextInterface) => {
  const { value } = usePersistanceStore()
  const [existingVoips, setExistingVoips] = useState<Array<Voip>>([])
  const [todayCalls, setTodayCalls] = useState<CallSearch>({
    data: [],
    count: 0,
    queues: [],
    persons: [],
  })
  const [dashboardResume, setDashboardResume] = useState<
    DashboardResume | undefined
  >(undefined)

  async function fetchDashboardResume() {
    const response = await api.get('panel/dash', {
      headers: { Authorization: `Bearer ${value.token}` },
    })
    setDashboardResume(response.data)
  }

  async function fetchExistingVoips() {
    const response = await api.get('panel', {
      headers: { Authorization: `Bearer ${value.token}` },
    })
    setExistingVoips(response.data)
  }

  async function fetchTodayCalls() {
    const response = await api.get('calls', {
      headers: { Authorization: `Bearer ${value.token}` },
    })
    setTodayCalls(response.data)
  }

  return (
    <DashboardContext.Provider
      value={{
        existingVoips,
        dashboardResume,
        fetchDashboardResume,
        fetchExistingVoips,
        fetchTodayCalls,
        todayCalls,
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

export default DashboardProvider
