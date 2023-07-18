import PersonCell from './PersonCell'

const PersonList = () => {
  const person = [1, 2, 3, 5, 6, 7, 8, 9, 10]

  return (
    <div className="flex flex-col w-full h-full">
      {person.map((person, key) => (
        <PersonCell key={key} person={person} type="white" />
      ))}
    </div>
  )
}

export default PersonList
