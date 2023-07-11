import { Envelope, Phone, Plus, User as UserIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import EditButton from "../components/EditButton/EditButton";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import { Input } from "../components/Input";
import Drawer from "../components/Lists/Drawer/Drawer";
import UserCallList from "../components/Lists/UserCallList/UserCallList";
import UserInfoCard from "../components/UserInfoCard/UserInfoCard";

const User = () => {

    const editUserForm = useForm();

    const [userStatus, setUserStatus] = useState<boolean>(true);

    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={4} />
            <div className="w-full flex flex-col grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div className="grow-1 w-full flex flex-col overflow-y-scroll gap-4">
                    <Header title="Pedro de Almeida Natali - ID 1" />
                    <div className="w-full flex md:p-12 pb-3 pl-7 pr-6 md:pt-0 mb-4 gap-14 xl:flex-row flex-col">
                        <div className="min-w-[320px] md:max-w-[320px] h-full flex flex-col gap-4">
                            <h2 className="text-primary_color font-medium text-xl">Informações</h2>
                            <UserInfoCard data="pedroalmeidan@gmail.com" name=" Email" icon={<Envelope size={20} className="text-secundary_color" />} />
                        </div>
                        <div className="w-full h-full flex flex-col gap-4">
                            <h2 className="text-primary_color font-medium text-xl">Chamadas</h2>
                            <UserCallList user="12313441" />
                        </div>
                    </div>
                    <EditButton>
                        <form className="h-min w-80 bg-secundary_color rounded-lg flex justify-center items-center p-5 flex-col gap-5">
                            <FormProvider {...editUserForm}>
                                <Input.Root id="name" pattern_color="background_color" initial_visibility={false}>
                                    <Input.Icon icon={<UserIcon color="gray" size={20} />} />
                                    <Input.Text placeholder="Name" />
                                    <Input.Action />
                                </Input.Root>
                                <Input.Root id="email" pattern_color="background_color" initial_visibility={false}>
                                    <Input.Icon icon={<Envelope color="gray" size={20} />} />
                                    <Input.Text placeholder="Email" />
                                    <Input.Action />
                                </Input.Root>
                                <Input.Root id="numero" pattern_color="background_color" initial_visibility={false}>
                                    <Input.Icon icon={<Phone color="gray" size={20} />} />
                                    <Input.Text placeholder="Ramal" />
                                    <Input.Action />
                                </Input.Root>
                                <div className="flex w-full h-min">
                                    <button type="button" onClick={() => { setUserStatus(!userStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${userStatus ? "border-blue-700" : "border-primary_color"} rounded-l-lg drop-shadow-3xl`}>
                                        <p className={`${userStatus ? "text-blue-700" : "text-primary_color"}`}>Ocupada</p>
                                    </button>
                                    <button type="button" onClick={() => { setUserStatus(!userStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${userStatus ? "border-red-700" : "border-primary_color"} rounded-r-lg drop-shadow-3xl`}>
                                        <p className={`${userStatus ? "text-red-700" : "text-primary_color"}`}>Cancelada</p>
                                    </button>
                                </div>
                                <button className="p-2 w-full text-secundary_color bg-primary_color flex justify-center items-center gap-2 rounded-md">
                                    <Plus size={18} className="text-secundary_color -ml-2" />
                                    <span>ADICIONAR</span>
                                </button>
                            </FormProvider>
                        </form>
                    </EditButton>
                </div>
                <BottomNavigationMenu selected={4} />
            </div>
        </div>
    )
}

export default User;