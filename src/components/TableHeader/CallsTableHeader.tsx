const CallsTableHeader = () => {
    return (
        <div className="min-h-[50px] max-h-[50px] grow-1 drop-shadow-3xl bg-primary_color rounded-lg items-center pl-7 pr-6 flex-row hidden sm:flex md:hidden lg:flex justify-around">
            <div className=" rounded-full drop-shadow-3xl hidden sm:flex md:hidden lg:flex" >
                <span className="text-secundary_color font-medium h-full text-sm items-center">Status</span>
            </div>
            <span className="text-secundary_color font-medium h-full text-sm items-center w-1/2 ml-4 hidden sm:flex md:hidden lg:flex">Ramal</span>
            <div className=" w-full rounded-b-lg flex items-center justify-center sm:mt-0 md:mt-2 lg:mt-0 mt-2">
                <time className="text-secundary_color font-medium h-full text-sm flex justify-center items-center pr-7 w-1/2">Horário</time>
                <span className="text-secundary_color font-medium h-full text-sm flex justify-center items-center w-1/2">Número</span>
            </div>
            <div className="w-full" />
        </div>
    )
}

export default CallsTableHeader;