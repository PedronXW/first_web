import { CheckFat, PhoneCall, PhoneX } from "@phosphor-icons/react";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import DashboardOutDoor from "../components/DashboardOutDoor/DashboardOutDoor";
import Drawer from "../components/Drawer/Drawer";
import Header from "../components/Header/Header";

const Home=()=>{
    return(
        <div className="h-screen w-screen flex">
            <Drawer selected={0}/>
            <div className="h-screen w-full grow-1 flex flex-col overflow-hidden">
                <Header/>
                <div className="h-full w-full grow-1 flex flex-col md:p-12 pl-7 pr-6 md:pr-0 md:pt-0 overflow-y-scroll">
                    <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-2 xl:gap-8 w-full">
                        <DashboardOutDoor name="Chamadas Recebidas" quantity_actually={20} quantity_past={10} icon={<PhoneCall className="text-secundary_color" size={20} />}/>
                        <DashboardOutDoor name="Atendidas" quantity_actually={20} quantity_past={10} icon={<CheckFat className="text-secundary_color" size={20} />}/>
                        <DashboardOutDoor name="Perdidas" quantity_actually={20} quantity_past={10} icon={<PhoneX className="text-secundary_color" size={20} />}/>
                    </div>
                    <div>

                    </div>
                </div>
                <BottomNavigationMenu selected={0}/>
            </div>
            
        </div>
    )
}

export default Home;