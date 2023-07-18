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
      className={`min-h-[50px] px-6 w-full flex items-center ${
        type === 'gray'
          ? 'bg-background_color'
          : 'bg-secundary_color drop-shadow-3xl'
      } mb-3 rounded-md gap-4 opacity-100`}
    >
      <span className="grow-1 w-full text-primary_color text-base">
        {person}
      </span>
      <span className="text-primary_color text-base w-fit whitespace-nowrap">
        (35) 3422-9066
      </span>
    </div>
  )
}

export default PersonCell
