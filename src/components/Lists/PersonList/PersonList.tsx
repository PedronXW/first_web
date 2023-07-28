import PersonCell from './PersonCell'

const PersonList = () => {
  const person = [1, 2, 3, 5, 6, 7, 8, 9, 10]

  return (
    <div className={`flex flex-col bg-secundary_color w-full`}>
      {person.length > 0 ? (
        person.map((person, key) => (
          <PersonCell key={key} person={person} type="white" />
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
