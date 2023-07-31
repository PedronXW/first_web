interface PersonCellSelectableInterface {
  person: any
  type?: 'gray' | 'white'
}

const PersonCell = ({
  person,
  type = 'gray',
}: PersonCellSelectableInterface) => {
  return (
    <div
      className={` h-16 p-5 w-full flex items-center bg-secundary_color rounded-md opacity-100  border-b-[1px] border-gray`}
    >
      <span className="grow-1 w-full text-primary_color text-base">
        {person.Person.name}
      </span>
      <span className="text-primary_color text-base w-fit whitespace-nowrap">
        {person.exten}
      </span>
    </div>
  )
}

export default PersonCell
