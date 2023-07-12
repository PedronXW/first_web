import { ArrowULeftDown, Phone, User as UserIcon, UserList } from "@phosphor-icons/react";
import { FormProvider, useForm } from "react-hook-form";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import FloatingButton from "../components/FloatingButton/FloatingButton";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import { Input } from "../components/Input";
import Drawer from "../components/Lists/Drawer/Drawer";
import PersonCellSelectable from "../components/Lists/PersonList/PersonCellSelectable";
import PersonList from "../components/Lists/PersonList/PersonList";
import UserInfoCard from "../components/UserInfoCard/UserInfoCard";

const Queue = () => {

    const person = [1, 2, 3, 5, 6, 7, 8, 9, 10];


    const QueueForm = useForm();

    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={1} />
            <div className="w-full flex flex-col grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div className="grow-1 w-full flex flex-col overflow-y-scroll gap-4">
                    <Header title="Nome da Fila - ID: 1231" />
                    <div className="w-full flex md:p-12 pb-3 pl-7 pr-6 md:pt-0 mb-4 gap-14 xl:flex-row flex-col">
                        <div className="min-w-[320px] h-full flex flex-col gap-4">
                            <h2 className="text-primary_color font-medium text-xl">Informações</h2>
                            <UserInfoCard data="Pedro de Almeida csdcdsacsa cascassadcasdcsa csdcas csadcdascsad xcsadcdsac csdacasd" name="Nome" icon={<UserIcon size={20} className="text-secundary_color" />} />
                            <UserInfoCard data="Pedro de Almeida csdcdsacsa cas" name="Nome" icon={<UserIcon size={20} className="text-secundary_color" />} />
                            <UserInfoCard data="Pedro de Almeida csdcdsacsa cas" name="Nome" icon={<UserIcon size={20} className="text-secundary_color" />} />
                        </div>
                        <div className="w-full h-full flex flex-col gap-4">
                            <h2 className="text-primary_color font-medium text-xl">Pessoas</h2>
                            <PersonList/>
                        </div>
                    </div>
                    <FloatingButton type="edit" isAcceptable>
                        <form className="h-96 w-80 overflow-y-scroll bg-secundary_color rounded-lg flex p-5 flex-col gap-3">
                            <FormProvider {...QueueForm}>
                                <h2 className="text-primary_color font-medium text-base">Dados da fila</h2>
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
                        </form>
                    </FloatingButton>
                </div>
                <BottomNavigationMenu selected={1} />
            </div>
        </div>
    )
}

export default Queue;