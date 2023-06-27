import { Bell, Plus } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import Drawer from "../components/Lists/Drawer/Drawer";
import RamaisList from "../components/Lists/RamaisList/RamaisList";

const Ramais = () => {

    const [state, setState] = useState(false);
    const ref = useRef<any>();
    const refe = useRef<any>();
    useEffect(() => {
        document.addEventListener('mousedown', (event) => {
            console.log(event.target);
            console.log(ref.current.children)
            for(let i = 0; i < ref.current.children.length; i++){
                console.log(ref.current.children[i].outerHTML);
                if(state === true && ref.current){
                    setState(false);
                }
            }
        });
    });

    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={1} />
            <div className="w-full flex flex-col grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div ref={refe} className="grow-1 w-full flex flex-col overflow-y-scroll">
                    <Header title="Ramais">
                        <ul className='flex flex-col gap-2 items-end' ref={ref}>
                            <div className="justify-center items-center p-2 cursor-pointer" onClick={(event: any) => { setState(!state); event.stopPropagation() }}>
                                <Bell size={24} />
                            </div>
                            <li className={`${state ? "flex" : "hidden"} relative bg-white border-2 border-background_color z-50 rounded-md w-72 min-h-[300px] drop-shadow-3xl`} onClick={(event: any) => { event.stopPropagation() }}>
                                <div>Arroz</div>
                            </li>
                        </ul>
                    </Header>
                    <RamaisList />
                </div>
                <BottomNavigationMenu selected={1} />
            </div>
            <button className={`absolute lg:hidden p-4 drop-shadow-3xl rounded-full bottom-20 md:bottom-3 bg-white z-50 right-2 `}>
                <Plus size={20} className="text-primary_color" />
            </button>
        </div>
    )
}

export default Ramais;