import { ReactNode, createContext, useCallback, useState } from 'react'
import { usePersistanceStore } from '../hooks/usePersistanceStore'
import { api } from '../lib/axios'
import { Queue } from './QueuesContext'

interface UsersContextInterface {
  children: ReactNode
}

export type VoipAccount = {
  exten: number
  user: string
  password: string
  personId: string
  Queues: Queue[]
}

export type User = {
  id: string
  email: string
  is_active: boolean
  name: string
  verified: boolean
  Voip_Account: VoipAccount
}

interface AddUserProps {
  name: string
  email: string
}

interface UsersContextType {
  users: User[]
  fetchUsers: () => Promise<void>
  addUser: (user: AddUserProps) => Promise<void>
  selectedUser: User | null
  setSelectedUser: (user: User) => void
}

export const UsersContext = createContext({} as UsersContextType)

export const UsersContextProvider = ({ children }: UsersContextInterface) => {
  const { value } = usePersistanceStore()

  const [users, setUsers] = useState<User[]>([])

  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const fetchUsers = useCallback(async () => {
    const result = await api.get('/persons', {
      headers: { Authorization: `Bearer ${value.token}` },
    })
    console.log(result.data.data)
    setUsers(result.data.data)
  }, [])

  const addUser = useCallback(async (user: AddUserProps) => {
    const result = await api.post('/persons', user, {
      headers: { Authorization: `Bearer ${value.token}` },
    })
    setUsers([result.data.data, ...users])
  }, [])

  return (
    <UsersContext.Provider
      value={{ users, fetchUsers, addUser, selectedUser, setSelectedUser }}
    >
      {children}
    </UsersContext.Provider>
  )
}
