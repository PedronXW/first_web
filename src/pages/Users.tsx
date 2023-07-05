import { Plus } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import Drawer from "../components/Lists/Drawer/Drawer";

const Users = () => {
    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={4} />
            <div className="w-full flex flex-col h-full grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div className="grow-1 w-full h-full flex flex-col overflow-y-scroll">
                    <Header title="Usuários">
                        <NavLink to={"add"} className="justify-center items-center p-3 mt-1 py-2 cursor-pointer text-primary_color flex gap-2">
                            <span className="text-base text-primary_color font-medium">Adicionar</span>
                            <Plus size={16} className="text-primary_color" />
                        </NavLink>
                    </Header>
                    <div className="flex flex-col pb-2">

                    </div>
                </div>
                <BottomNavigationMenu selected={4} />
            </div>
        </div>
    )
}

export default Users;