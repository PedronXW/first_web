import { PossibleRamal } from '../QueuesList/QueueCell'

interface PersonCellSelectableInterface {
  person: PossibleRamal
  status?: boolean
  changeStatus?: (personExten: number) => void
  type?: 'gray' | 'white'
}

const PersonCellSelectable = ({
  person,
  status = false,
  type = 'gray',
  changeStatus,
}: PersonCellSelectableInterface) => {
  function handleChangeState() {
    changeStatus && changeStatus(person.voip)
  }

  return (
    <div
      onClick={handleChangeState}
      className={`min-h-[50px] cursor-pointer px-6 w-full flex items-center ${
        type === 'gray'
          ? 'bg-background_color'
          : 'bg-secundary_color drop-shadow-3xl'
      } mb-3 rounded-md gap-4 ${status ? 'opacity-100' : 'opacity-40'}`}
    >
      <input type="checkbox" checked={status} />
      <span className="grow-1 w-full text-primary_color text-base whitespace-nowrap text-ellipsis overflow-hidden">
        {person.person}
      </span>
      <span className="text-primary_color text-base w-fit whitespace-nowrap">
        {person.voip}
      </span>
    </div>
  )
}

export default PersonCellSelectable
