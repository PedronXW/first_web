import { useContext, useEffect } from 'react'
import { Person, PersonsContext } from '../../../contexts/PersonsContext'
import PersonCardCell from './PersonCardCell'

const PersonList = () => {
  const { fetchPerson, persons } = useContext(PersonsContext)

  useEffect(() => {
    fetchPerson()
  }, [])

  return (
    <div
      className={`grid ${
        persons.length < 3 ? 'lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-auto'
      } w-full gap-4 md:px-12 pl-7 pr-6`}
    >
      {persons.length > 0 ? (
        persons.map((person: Person) => (
          <PersonCardCell key={person.id} person={person} />
        ))
      ) : (
        <div className="h-full w-full flex justify-center items-center text-primary_color font-medium">
          Nenhuma usuário cadastrado
        </div>
      )}
    </div>
  )
}

export default PersonList
