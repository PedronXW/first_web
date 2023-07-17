import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowULeftDown, IdentificationBadge, Phone, UserList } from "@phosphor-icons/react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import FloatingButton from "../components/FloatingButton/FloatingButton";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import { Input } from "../components/Input";
import Drawer from "../components/Lists/Drawer/Drawer";
import PersonCellSelectable from "../components/Lists/PersonList/PersonCellSelectable";
import QueuesList from "../components/Lists/QueuesList/QueuesList";

const newQueueFormSchema = z.object({
    id: z.number(),
    name: z.string().nonempty("O nome é obrigatório"),
    digit: z.number(),
    overflow: z.number()
})

export type NewQueueType = z.infer<typeof newQueueFormSchema>


const Queues = () => {

    const person = [1];

    const QueueForm = useForm<NewQueueType>({
        resolver: zodResolver(newQueueFormSchema)
    });

    function handleCreateNewQueue(data:NewQueueType){
        console.log(data);
    }

    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={1} />
            <div className="w-full flex flex-col h-full grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div className="grow-1 h-full w-full flex flex-col overflow-y-scroll">
                    <Header title="Filas" />
                    <QueuesList />
                    <form onSubmit={QueueForm.handleSubmit(handleCreateNewQueue)}>
                    <FloatingButton type="add" isAcceptable>
                        <div className="h-96 w-80 overflow-y-scroll bg-secundary_color rounded-lg flex p-5 flex-col gap-3">
                            <FormProvider {...QueueForm}>
                                <h2 className="text-primary_color font-medium text-base">Dados da fila</h2>
                                <Input.Root id="id" pattern_color="background_color" initial_visibility={false}>
                                    <Input.Icon icon={<IdentificationBadge size={20} className="text-primary_color" />} />
                                    <Input.Text placeholder="Id" />
                                    <Input.Action />
                                </Input.Root>
                                <Input.Root id="name" pattern_color="background_color" initial_visibility={false}>
                                    <Input.Icon icon={<UserList size={20} className="text-primary_color" />} />
                                    <Input.Text placeholder="Name" />
                                    <Input.Action />
                                </Input.Root>
                                <Input.Root id="digit" pattern_color="background_color" initial_visibility={false}>
                                    <Input.Icon icon={<Phone size={20} className="text-primary_color" />} />
                                    <Input.Text placeholder="Dígito Identificador" />
                                    <Input.Action />
                                </Input.Root>
                                <Input.Root id="overflow" pattern_color="background_color" initial_visibility={false}>
                                    <Input.Icon icon={<ArrowULeftDown size={20} className="text-primary_color" />} />
                                    <Input.Text placeholder="Próximo destino quando desativada" />
                                    <Input.Action />
                                </Input.Root>
                            </FormProvider>
                            <h2 className="text-primary_color font-medium text-base mb-3 mt-3">Ramais que farão parte da fila</h2>
                            <div className="flex flex-col w-full h-full">
                                {person.map((person, key) => <PersonCellSelectable key={key} person={person} />)}
                            </div>
                        </div>
                    </FloatingButton>
                    </form>
                </div>
                <BottomNavigationMenu selected={1} />
            </div>
        </div>
    )
}

export default Queues;