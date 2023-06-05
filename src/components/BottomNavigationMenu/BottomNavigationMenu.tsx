import { ClockCounterClockwise, Gear, House, UsersThree } from "@phosphor-icons/react";
import { useState } from "react";
import BottomNavigationMenuItem from "./BottomNavigationMenuItem";

interface BottomNavigationMenuProps{
    selected:number;
}

const BottomNavigationMenu = ({selected}:BottomNavigationMenuProps) => {

    const [items, setItems] = useState([
        { name:"Dashboard", route:'/', icon: <House className="text-primary_color" size={24}/>, iconSelected: <House size={24} className="text-secundary_color"/>},
        { name:"Persons", route:'/persons', icon: <UsersThree className="text-primary_color" size={24}/>, iconSelected: <UsersThree size={24} className="text-secundary_color"/>},
        { name:"Logs", route:'/logs', icon: <ClockCounterClockwise className="text-primary_color" size={24}/>, iconSelected: <ClockCounterClockwise size={24} className="text-secundary_color"/>},
        { name:"Settings", route:'/settings', icon: <Gear className="text-primary_color" size={24}/>, iconSelected: <Gear size={24} className="text-secundary_color"/>},
    ])

    return (
        <ul className='h-16 w-full bg-grey flex justify-between md:hidden'>
            {items.map((item, key) => <BottomNavigationMenuItem item={item} state={false} selected={key == selected ? true : false} key={key} />)}
        </ul>
    )
}

export default BottomNavigationMenu;