interface PersonCallCellInterface {
  call: any
}

const PersonCallCell = ({ call }: PersonCallCellInterface) => {
  return (
    <div className="max-h-[64px] grow-1 w-full bg-secundary_color border-b-[1px] border-gray flex flex-row items-center p-1 py-5">
      <div className="min-h-[10px] min-w-[10px] mx-4 bg-green-500 rounded-full drop-shadow-3xl flex" />
      <div className=" w-full bg-secundary_color rounded-b-lg flex items-center justify-between sm:mt-0 md:mt-2 lg:mt-0 mt-2 sm:pl-0 lg:pl-0 pl-2">
        <div className="flex justify-start items-center gap-2 w-1/2">
          <span className="text-primary_color font-medium h-full text-sm justify-center items-center flex sm:hidden md:flex lg:hidden">
            Horário:
          </span>
          <time className="text-primary_color font-medium h-full text-sm flex justify-center items-center pr-7">
            18:04:23
          </time>
        </div>
        <span className="text-primary_color w-1/2 font-medium h-full whitespace-nowrap text-sm pr-4 flex justify-end items-center">
          (35)99124-4060
        </span>
      </div>
    </div>
  )
}

export default PersonCallCell
