const DashboardChart = () => {
    return (
        <section title="Grafíco da quantidade de chamadas nos últimos 30 dias" className="lg:w-5/6 w-full min-h-[350px] max-h-[350px] flex justify-end">
            <div className="h-14 w-14 absolute z-10 bg-secundary_color hidden rounded-full -mt-7 lg:flex justify-center items-center">
                <figure className="h-10 w-10 bg-primary_color rounded-full drop-shadow-3xl flex justify-center items-center">
                    
                </figure>
            </div>
            <div className="h-full mt-0 lg:mt-7 flex flex-col w-full rounded-lg self-end border-[1px] border-primary_color bg-white drop-shadow-3xl align-bottom lg:mr-6">
                <div className="min-h-[60px] w-full bg-primary_color rounded-t-md drop-shadow-3xl flex items-center pl-5 pr-5 justify-between">
                    <h2 className="text-secundary_color font-medium">Arroz</h2>
                    <figure className="h-10 w-10 bg-primary_color flex justify-center items-center lg:hidden">
                        
                    </figure>
                </div>
                <div className="grow-1 w-full bg-secundary_color rounded-b-lg flex items-center justify-center">
                    
                </div>
            </div>
        </section>
    )
}

export default DashboardChart;