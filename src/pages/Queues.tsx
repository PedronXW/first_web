import { Plus } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import Drawer from "../components/Lists/Drawer/Drawer";
import QueuesList from "../components/Lists/QueuesList/QueuesList";

const Queues = () => {

    
    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={1} />
            <div className="w-full flex flex-col h-full grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div className="grow-1 h-full w-full flex flex-col overflow-y-scroll">
                    <Header title="Filas">
                        <NavLink to={"add"} className="justify-center items-center p-3 mt-1 py-2 cursor-pointer text-primary_color flex gap-2">
                            <span className="text-base text-primary_color font-medium">Adicionar</span>
                            <Plus size={16} className="text-primary_color" />
                        </NavLink>
                    </Header>
                    <QueuesList />
                </div>
                <BottomNavigationMenu selected={1} />
            </div>
            <button className={`absolute lg:hidden p-4 drop-shadow-3xl rounded-full bottom-20 md:bottom-3 bg-white z-50 right-2`}>
                <Plus size={20} className="text-primary_color" />
            </button>
        </div>
    )
}

export default Queues;