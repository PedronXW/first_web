import { enqueueSnackbar } from 'notistack'
import { ReactNode, createContext, useCallback, useState } from 'react'
import { usePersistanceStore } from '../hooks/usePersistanceStore'
import useResponseTranslation from '../hooks/useResponseTranslation'
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
  ramal_active?: boolean
  ramal?: number
}

interface EditUserProps {
  id: string
  name: string
}

interface EditUserRamalProps {
  id: string
  ramal?: number
}

interface UserIdProps {
  id: string
}

interface UsersContextType {
  users: User[]
  fetchUsers: () => Promise<void>
  addUser: (user: AddUserProps) => Promise<void>
  editUser: (user: EditUserProps) => Promise<void>
  desactivePerson: (user: UserIdProps) => Promise<void>
  deleteRamal: (user: UserIdProps) => Promise<void>
  createRamal: (user: EditUserRamalProps) => Promise<void>
  updateRamal: (user: EditUserRamalProps) => Promise<void>
}

export const UsersContext = createContext({} as UsersContextType)

export const UsersContextProvider = ({ children }: UsersContextInterface) => {
  const { value } = usePersistanceStore()

  const [users, setUsers] = useState<User[]>([])
  const { translateError, traslateSuccess } = useResponseTranslation()

  const fetchUsers = useCallback(async () => {
    const result = await api.get('/persons', {
      headers: { Authorization: `Bearer ${value.token}` },
    })
    setUsers(result.data.data)
  }, [])

  const addUser = useCallback(async (user: AddUserProps) => {
    api
      .post('/persons', user, {
        headers: { Authorization: `Bearer ${value.token}` },
      })
      .then((response) => {
        user.ramal_active &&
          createRamal({ id: response.data.id, ramal: user.ramal })
        setUsers((state) => [response.data, ...state])
      })
      .catch((error) => {
        enqueueSnackbar(translateError(error.response.status), {
          variant: 'error',
        })
      })
  }, [])

  const createRamal = useCallback(async (user: EditUserRamalProps) => {
    api
      .post(
        '/persons/voip/' + user.id,
        { voip: +user.ramal! },
        {
          headers: { Authorization: `Bearer ${value.token}` },
        },
      )
      .then((response) => {
        setUsers((state) => {
          const newState = state.map((user) => {
            if (user.id === response.data.id) {
              return {
                ...response.data,
              }
            }
            return user
          })
          return newState
        })
        enqueueSnackbar(traslateSuccess(response.status), {
          variant: 'success',
        })
      })
      .catch((error) => {
        enqueueSnackbar(translateError(error.response.status), {
          variant: 'error',
        })
      })
  }, [])

  const deleteRamal = useCallback(async (user: UserIdProps) => {
    api
      .delete('/persons/voip/' + user.id, {
        headers: { Authorization: `Bearer ${value.token}` },
      })
      .then((response) => {
        setUsers((state) => {
          const newState = state.map((user) => {
            if (user.id === response.data.id) {
              return {
                ...response.data,
              }
            }
            return user
          })
          return newState
        })
        enqueueSnackbar(traslateSuccess(response.status), {
          variant: 'success',
        })
      })
      .catch((error) => {
        enqueueSnackbar(translateError(error.response.status), {
          variant: 'error',
        })
      })
  }, [])

  const updateRamal = useCallback(async (user: EditUserRamalProps) => {
    api
      .patch(
        '/persons/voip/' + user.id,
        { voip: user.ramal },
        {
          headers: { Authorization: `Bearer ${value.token}` },
        },
      )
      .then((response) => {
        setUsers((state) => {
          const newState = state.map((user) => {
            if (user.id === response.data.id) {
              return {
                ...response.data,
              }
            }
            return user
          })
          return newState
        })
        enqueueSnackbar(traslateSuccess(response.status), {
          variant: 'success',
        })
      })
      .catch((error) => {
        enqueueSnackbar(translateError(error.response.status), {
          variant: 'error',
        })
      })
  }, [])

  const desactivePerson = useCallback(async (user: UserIdProps) => {
    api
      .delete('/persons/' + user.id, {
        headers: { Authorization: `Bearer ${value.token}` },
      })
      .then((response) => {
        setUsers((state) => {
          const newState = state.map((userChanged) => {
            if (userChanged.id === response.data.id) {
              return {
                ...response.data,
              }
            }
            return userChanged
          })
          return newState
        })
        enqueueSnackbar(traslateSuccess(response.status), {
          variant: 'success',
        })
      })
      .catch((error) => {
        enqueueSnackbar(translateError(error.response.status), {
          variant: 'error',
        })
      })
  }, [])

  const editUser = useCallback(async (user: EditUserProps) => {
    const changeUser = await api
      .patch(
        '/persons/' + user.id,
        { name: user.name },
        {
          headers: { Authorization: `Bearer ${value.token}` },
        },
      )
      .then((response) => {
        setUsers((state) => {
          const newState = state.map((userChanged) => {
            if (userChanged.id === response.data.id) {
              return {
                ...response.data,
              }
            }
            return userChanged
          })
          return newState
        })
        enqueueSnackbar(traslateSuccess(response.status), {
          variant: 'success',
        })
      })
      .catch((error) => {
        enqueueSnackbar(translateError(error.response.status), {
          variant: 'error',
        })
      })
  }, [])

  return (
    <UsersContext.Provider
      value={{
        users,
        fetchUsers,
        updateRamal,
        addUser,
        editUser,
        createRamal,
        deleteRamal,
        desactivePerson,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}
