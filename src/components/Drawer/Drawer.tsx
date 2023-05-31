import { ArrowFatLineLeft, ArrowFatLineRight, ClockCounterClockwise, Gear, House, UsersThree } from "@phosphor-icons/react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import icon from '../../assets/icon.png';
import { changeMenuState } from "../../slices/stateMenuSlice";
import DrawerItem from "./DrawerItem";

interface DrawerProps{
    selected:number;
}

const Drawer = ({selected}:DrawerProps) => {
    const [items, setItems] = useState([
        { name:"Dashboard", route:'/', icon: <House className="text-primary_color" size={24}/>, iconSelected: <House size={24} className="text-secundary_color"/>},
        { name:"Persons", route:'/persons', icon: <UsersThree className="text-primary_color" size={24}/>, iconSelected: <UsersThree size={24} className="text-secundary_color"/>},
        { name:"Logs", route:'/logs', icon: <ClockCounterClockwise className="text-primary_color" size={24}/>, iconSelected: <ClockCounterClockwise size={24} className="text-secundary_color"/>},
        { name:"Settings", route:'/settings', icon: <Gear className="text-primary_color" size={24}/>, iconSelected: <Gear size={24} className="text-secundary_color"/>},
    ])

    const [state, setState]=useState<boolean>(useAppSelector((state)=>state.state_menu.state));

    const actions=useAppDispatch();

    function handleClick(){
        actions(changeMenuState())
        setState(!state);
    }

    return(
        <div className={`h-screen ${!state?"min-w-[72px]":"min-w-[220px]"} bg-grey md:flex flex-col items-center justify-between border-r-2 border-gray-200 hidden`}>
            <div className='h-min w-min flex flex-col items-center gap-5'>
                <div className={`min-h-[70px] min-w-[70px] bg-grey cursor-pointer flex items-center pt-1 bg-gray-light justify-center`} onClick={()=>{handleClick()}}>
                    <div className="min-h-[70px] min-w-[70px] flex justify-center items-center">
                        <img src={icon} />
                    </div>
                    <div className={`${state?'flex justify-center ml-4':'hidden'}`}>
                        <h2 className={`${state?'flex min-w-[132px]':'hidden'} text-2xl font-bold`}>IPorter</h2>
                    </div>
                </div>
                <div className='h-min w-max flex flex-col gap-2'>
                    {items.map((item,key)=><DrawerItem item={item} state={state} selected={key==selected?true:false} key={key}/>)}
                </div>
            </div>
            <div className='pt-[3px] bg-primary_color'>
                <div className={`h-[60px] w-full bg-grey cursor-pointer flex items-center pt-1 pl-3 pr-3 bg-gray-light justify-centers`} onClick={()=>{handleClick()}}>
                    <div className="min-h-[50px] min-w-[50px] flex justify-center items-center">
                        {state?<ArrowFatLineLeft size={24} color=""/>:<ArrowFatLineRight size={24}/>}
                    </div>
                    <div className={`${state?'flex justify-center ml-4':'hidden'}`}>
                        <h2 className={`${state?'flex min-w-[132px]':'hidden'}`}>{state?"Close Menu":"Open Menu"}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer;