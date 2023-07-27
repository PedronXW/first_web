const LogsTableHeader = () => {
  return (
    <div className="min-h-[50px] max-h-[50px] grow-1 drop-shadow-3xl bg-primary_color rounded-lg items-center pl-6 pr-7 flex-row hidden sm:flex md:hidden lg:flex justify-around">
      <span className="text-secundary_color font-medium h-full text-sm items-center w-1/4 ml-4 hidden sm:flex md:hidden lg:flex">
        Tipo
      </span>
      <span className="text-secundary_color font-medium h-full text-sm items-center w-1/2 hidden sm:flex md:hidden lg:flex">
        Responsável
      </span>
      <time className="text-secundary_color font-medium h-full text-sm flex justify-center items-center w-1/2">
        Horário
      </time>
      <span className="text-secundary_color font-medium h-full text-sm flex justify-center items-center w-1/2">
        Entidade
      </span>
      <span className="text-secundary_color ml-3 font-medium h-full text-sm flex justify-start items-center w-1/2">
        Descrição
      </span>
    </div>
  )
}

export default LogsTableHeader
