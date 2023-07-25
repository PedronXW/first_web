const LogsTableHeader = () => {
  return (
    <div className="min-h-[50px] max-h-[50px] grow-1 drop-shadow-3xl bg-primary_color rounded-lg items-center pl-5 pr-6 flex-row hidden sm:flex md:hidden lg:flex justify-around">
      <div className=" rounded-full drop-shadow-3xl hidden sm:flex md:hidden lg:flex justify-center min-w-[42px]">
        <span className="text-secundary_color font-medium h-full text-sm items-center">
          Tipo
        </span>
      </div>
      <span className="text-secundary_color font-medium h-full text-sm items-center w-1/2 mr-6 ml-4 hidden sm:flex md:hidden lg:flex">
        Responsável
      </span>
      <div className=" w-full rounded-b-lg flex items-center justify-center sm:mt-0 md:mt-2 lg:mt-0 mt-2">
        <time className="text-secundary_color font-medium h-full text-sm flex justify-center items-center pr-7 w-1/2">
          Horário
        </time>
        <span className="text-secundary_color font-medium h-full text-sm flex justify-center items-center w-1/2">
          Editado
        </span>
      </div>
      <span className="text-secundary_color ml-3 font-medium h-full text-sm flex justify-start items-center w-full">
        Descrição
      </span>
    </div>
  )
}

export default LogsTableHeader
