import { ClockCounterClockwise, Gear, House, List, PhoneCall } from "@phosphor-icons/react";
import { useState } from "react";
import icon from '../../../assets/icon.png';
import DrawerItem from "./DrawerItem";

interface DrawerProps {
    selected: number;
}

const Drawer = ({ selected }: DrawerProps) => {
    const [items, setItems] = useState([
        { name: "Dashboard", route: '/', icon: <House className="text-secundary_color" size={20} />, iconSelected: <House size={20} className="text-primary_color" /> },
        { name: "Filas", route: '/queues', icon: <List className="text-secundary_color" size={20} />, iconSelected: <List size={20} className="text-primary_color" /> },
        { name: "Chamadas", route: '/calls', icon: <PhoneCall className="text-secundary_color" size={20} />, iconSelected: <PhoneCall size={20} className="text-primary_color" /> },
        { name: "Logs", route: '/logs', icon: <ClockCounterClockwise className="text-secundary_color" size={20} />, iconSelected: <ClockCounterClockwise size={20} className="text-primary_color" /> },
        { name: "Settings", route: '/settings', icon: <Gear className="text-secundary_color" size={20} />, iconSelected: <Gear size={20} className="text-primary_color" /> },
    ])

    return (
        <aside className={`h-screen max-w-[240px] min-w-[240px] bg-primary_color md:flex flex-col items-center justify-between hidden p-5 pr-0 pt-3`}>
            <menu className='h-min w-full flex flex-col items-center gap-7'>
                <figure className={`h-[70px] w-full cursor-pointer flex flex-col items-center justify-center pr-7`}>
                    <img className="min-h-[50px] min-w-[50px] max-h-[70px] max-w-[70px] flex justify-center items-center" src={icon} />
                    <figcaption className={`flex text-center text-xl font-bold text-secundary_color`}>IPorter</figcaption>
                </figure>
                <ul className='h-min w-full flex flex-col gap-2'>
                    {items.map((item, key) => <DrawerItem item={item} selected={key == selected ? true : false} key={key} />)}
                </ul>
            </menu>
        </aside>
    )
}

export default Drawer;