import { enqueueSnackbar } from 'notistack'
import { ReactNode, createContext, useCallback, useState } from 'react'
import { usePersistanceStore } from '../hooks/usePersistanceStore'
import useResponseTranslation from '../hooks/useResponseTranslation'
import { api } from '../lib/axios'
import { Queue } from './QueuesContext'

interface PersonsContextInterface {
  children: ReactNode
}

export type VoipAccount = {
  exten: number
  person: string
  password: string
  personId: string
  Queues: Queue[]
}

export type Person = {
  id: string
  email: string
  is_active: boolean
  name: string
  verified: boolean
  Voip_Account: VoipAccount
}

interface AddPersonProps {
  name: string
  email: string
  ramal_active?: boolean
  ramal?: number
}

interface EditPersonProps {
  id: string
  name: string
}

interface EditPersonRamalProps {
  id: string
  ramal?: number
}

interface PersonIdProps {
  id: string
}

interface PersonsContextType {
  persons: Person[]
  fetchPerson: () => Promise<void>
  addPerson: (person: AddPersonProps) => Promise<void>
  editPerson: (person: EditPersonProps) => Promise<void>
  desactivePerson: (person: PersonIdProps) => Promise<void>
  deleteRamal: (person: PersonIdProps) => Promise<void>
  createRamal: (person: EditPersonRamalProps) => Promise<void>
  updateRamal: (person: EditPersonRamalProps) => Promise<void>
}

export const PersonsContext = createContext({} as PersonsContextType)

export const PersonsContextProvider = ({
  children,
}: PersonsContextInterface) => {
  const { value } = usePersistanceStore()

  const [persons, setPersons] = useState<Person[]>([])
  const { translateError, traslateSuccess } = useResponseTranslation()

  const fetchPerson = useCallback(async () => {
    const result = await api.get('/persons', {
      headers: { Authorization: `Bearer ${value.token}` },
    })
    setPersons(result.data.data)
  }, [])

  const addPerson = useCallback(async (person: AddPersonProps) => {
    api
      .post('/persons', person, {
        headers: { Authorization: `Bearer ${value.token}` },
      })
      .then((response) => {
        person.ramal_active &&
          createRamal({ id: response.data.id, ramal: person.ramal })
        setPersons((state) => [response.data, ...state])
      })
      .catch((error) => {
        enqueueSnackbar(translateError(error.response.status), {
          variant: 'error',
        })
      })
  }, [])

  const createRamal = useCallback(async (person: EditPersonRamalProps) => {
    api
      .post(
        '/persons/voip/' + person.id,
        { voip: +person.ramal! },
        {
          headers: { Authorization: `Bearer ${value.token}` },
        },
      )
      .then((response) => {
        setPersons((state) => {
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
        enqueueSnackbar(translateError(error.response.status), {
          variant: 'error',
        })
      })
  }, [])

  const deleteRamal = useCallback(async (person: PersonIdProps) => {
    api
      .delete('/persons/voip/' + person.id, {
        headers: { Authorization: `Bearer ${value.token}` },
      })
      .then((response) => {
        setPersons((state) => {
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
        enqueueSnackbar(translateError(error.response.status), {
          variant: 'error',
        })
      })
  }, [])

  const updateRamal = useCallback(async (person: EditPersonRamalProps) => {
    api
      .patch(
        '/persons/voip/' + person.id,
        { voip: person.ramal },
        {
          headers: { Authorization: `Bearer ${value.token}` },
        },
      )
      .then((response) => {
        setPersons((state) => {
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
        enqueueSnackbar(translateError(error.response.status), {
          variant: 'error',
        })
      })
  }, [])

  const desactivePerson = useCallback(async (person: PersonIdProps) => {
    api
      .delete('/persons/' + person.id, {
        headers: { Authorization: `Bearer ${value.token}` },
      })
      .then((response) => {
        setPersons((state) => {
          const newState = state.map((personChanged) => {
            if (personChanged.id === response.data.id) {
              return {
                ...response.data,
              }
            }
            return personChanged
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

  const editPerson = useCallback(async (person: EditPersonProps) => {
    const changePerson = await api
      .patch(
        '/persons/' + person.id,
        { name: person.name },
        {
          headers: { Authorization: `Bearer ${value.token}` },
        },
      )
      .then((response) => {
        setPersons((state) => {
          const newState = state.map((personChanged) => {
            if (personChanged.id === response.data.id) {
              return {
                ...response.data,
              }
            }
            return personChanged
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
    <PersonsContext.Provider
      value={{
        persons,
        fetchPerson,
        updateRamal,
        addPerson,
        editPerson,
        createRamal,
        deleteRamal,
        desactivePerson,
      }}
    >
      {children}
    </PersonsContext.Provider>
  )
}
