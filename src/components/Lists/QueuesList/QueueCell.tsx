import { PhoneIncoming } from "@phosphor-icons/react";

interface QueueCellInterface {
    queue: any;
}

const QueueCell = ({ queue }: QueueCellInterface) => {
    return (
        <section title={queue.name ? queue.name : "arroz"} className="h-36 flex flex-col w-full justify-end items-end ">
            <div className="h-[32px] w-[32px] bg-green-500 relative z-10 right-4 border-[8px] border-background_color rounded-full flex justify-center items-center" />
            <div className="h-5/6 w-full rounded-lg self-end bg-secundary_color drop-shadow-3xl cursor-pointer align-bottom -mt-4">
                <header className="h-2/4 w-full bg-primary_color rounded-t-md drop-shadow-3xl flex items-center pl-5 pr-5 justify-between">
                    <h3 className="text-secundary_color font-medium">Administrativo</h3>
                </header>
                <div className="h-2/4 w-full bg-secundary_color rounded-b-lg flex items-center justify-between">
                    <div className="h-full grow-1 flex justify-start items-center pl-3 gap-3">
                        <figure className="h-8 w-8 flex justify-center items-center">
                            <PhoneIncoming size={20} />
                        </figure>
                        <strong className="text-primary_color font-medium h-full flex items-center w-full">Chamadas Recebidas</strong>
                    </div>
                    <strong className="text-primary_color font-medium h-full flex justify-end items-center pr-7 w-min">30</strong>
                </div>
            </div>
        </section>
    )
}

export default QueueCell;