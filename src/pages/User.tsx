import { User as UserIcon } from "@phosphor-icons/react";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import EditButton from "../components/EditButton/EditButton";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import Drawer from "../components/Lists/Drawer/Drawer";
import PersonList from "../components/Lists/PersonList/PersonList";
import UserInfoCard from "../components/UserInfoCard/UserInfoCard";

const User = () => {
    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={4} />
            <div className="w-full flex flex-col grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div className="grow-1 w-full flex flex-col overflow-y-scroll gap-4">
                    <Header title="Nome de usuário - ID1231" />
                    <div className="w-full flex md:p-12 pb-3 pl-7 pr-6 md:pt-0 mb-4 gap-14 xl:flex-row flex-col">
                        <div className="min-w-[320px] h-full flex flex-col gap-4">
                            <h2 className="text-primary_color font-medium text-xl">Informações</h2>
                            <UserInfoCard data="Pedro de Almeida csdcdsacsa cascassadcasdcsa csdcas csadcdascsad xcsadcdsac csdacasd" name="Nome" icon={<UserIcon size={20} className="text-secundary_color" />} />
                            <UserInfoCard data="Pedro de Almeida csdcdsacsa cas" name="Nome" icon={<UserIcon size={20} className="text-secundary_color" />} />
                            <UserInfoCard data="Pedro de Almeida csdcdsacsa cas" name="Nome" icon={<UserIcon size={20} className="text-secundary_color" />} />
                        </div>
                        <div className="w-full h-full flex flex-col gap-4">
                            <h2 className="text-primary_color font-medium text-xl">Chamadas</h2>
                            <PersonList />
                        </div>
                    </div>
                    <EditButton>
                        <form className="h-96 w-80 overflow-y-scroll bg-secundary_color rounded-lg flex p-5 flex-col gap-3">
                        </form>
                    </EditButton>
                </div>
                <BottomNavigationMenu selected={4} />
            </div>
        </div>
    )
}

export default User;