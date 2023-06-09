import { ClockCounterClockwise, Gear, House, UsersThree } from "@phosphor-icons/react";
import { useState } from "react";
import icon from '../../../assets/icon.png';
import DrawerItem from "./DrawerItem";

interface DrawerProps {
    selected: number;
}

const Drawer = ({ selected }: DrawerProps) => {
    const [items, setItems] = useState([
        { name: "Dashboard", route: '/', icon: <House className="text-secundary_color" size={24} />, iconSelected: <House size={24} className="text-primary_color" /> },
        { name: "Persons", route: '/persons', icon: <UsersThree className="text-secundary_color" size={24} />, iconSelected: <UsersThree size={24} className="text-primary_color" /> },
        { name: "Logs", route: '/logs', icon: <ClockCounterClockwise className="text-secundary_color" size={24} />, iconSelected: <ClockCounterClockwise size={24} className="text-primary_color" /> },
        { name: "Settings", route: '/settings', icon: <Gear className="text-secundary_color" size={24} />, iconSelected: <Gear size={24} className="text-primary_color" /> },
    ])

    return (
        <menu className={`h-screen max-w-[280px] min-w-[280px] bg-primary_color md:flex flex-col items-center justify-between shadow-inner hidden p-5 pr-0`}>
            <nav className='h-min w-full flex flex-col items-center gap-5'>
                <figure className={`h-[50px] w-full cursor-pointer flex items-center pt-1 justify-center`}>
                    <img className="min-h-[50px] min-w-[50px] max-h-[70px] max-w-[70px] flex justify-center items-center" src={icon} />
                    <figcaption className={`flex min-w-[132px] ml-4 text-2xl font-bold`}>IPorter</figcaption>
                </figure>
                <ul className='h-min w-full flex flex-col gap-2'>
                    {items.map((item, key) => <DrawerItem item={item} selected={key == selected ? true : false} key={key} />)}
                </ul>
            </nav>
        </menu>
    )
}

export default Drawer;