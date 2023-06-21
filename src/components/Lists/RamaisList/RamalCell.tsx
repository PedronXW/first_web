import { PhoneIncoming } from "@phosphor-icons/react";

interface RamalCellInterface {
    ramal: any;
}

const RamalCell = ({ ramal }: RamalCellInterface) => {
    return (
        <section title={ramal.name ? ramal.name : "arroz"} className="h-36 flex flex-col w-full justify-end items-end ">
            <div className="h-[32px] w-[32px] bg-green-500 relative z-10 right-4 border-[8px] border-secundary_color rounded-full flex justify-center items-center" />
            <div className="h-5/6 w-full rounded-lg self-end border-[1px] border-primary_color bg-white drop-shadow-3xl cursor-pointer align-bottom -mt-4">
                <div className="h-2/4 w-full bg-gradient-to-r from-primary_color to-gray-600 rounded-t-md drop-shadow-3xl flex items-center pl-5 pr-5 justify-between">
                    <h2 className="text-secundary_color font-medium">Administrativo</h2>
                </div>
                <div className="h-2/4 w-full bg-secundary_color rounded-b-lg flex items-center justify-between">
                    <div className="h-full grow-1 flex justify-start items-center pl-3 gap-3">
                        <figure className="h-8 w-8 flex justify-center items-center">
                            <PhoneIncoming size={20} />
                        </figure>
                        <h2 className="text-primary_color font-medium h-full flex items-center w-full">Chamadas Recebidas</h2>
                    </div>
                    <h2 className="text-primary_color font-medium h-full flex justify-end items-center pr-7 w-min">30</h2>
                </div>
            </div>
        </section>
    )
}

export default RamalCell;