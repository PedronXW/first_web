import { IdentificationBadge, User, UserList } from "@phosphor-icons/react";
import { FormProvider, useForm } from "react-hook-form";
import AddButton from "../components/AddButton/AddButton";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import { Input } from "../components/Input";
import Drawer from "../components/Lists/Drawer/Drawer";
import UserInfoCard from "../components/UserInfoCard/UserInfoCard";

const SystemSettings = () => {

    const QueueForm = useForm();

    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={4} />
            <div className="w-full flex flex-col h-full grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div className="grow-1 w-full h-full flex flex-col overflow-y-scroll">
                    <Header title="Configuração de Sistema" />
                    <div className="min-w-[320px] max-w-[320px] h-full flex flex-col gap-4 ml-12">
                        <h2 className="text-primary_color font-medium text-xl">Informações</h2>
                        <UserInfoCard data="Pedro de Almeida csdcdsacsa cascassadcasdcsa csdcas csadcdascsad xcsadcdsac csdacasd" name="Nome" icon={<User size={20} className="text-secundary_color" />} />
                        <UserInfoCard data="Pedro de Almeida csdcdsacsa cas" name="Nome" icon={<User size={20} className="text-secundary_color" />} />
                    </div>
                    <AddButton>
                        <form className="h-min w-80 overflow-y-scroll bg-secundary_color rounded-lg flex p-5 flex-col gap-3">
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
                            </FormProvider>
                        </form>
                    </AddButton>
                </div>
                <BottomNavigationMenu selected={4} />
            </div>
        </div>
    )
}

export default SystemSettings;