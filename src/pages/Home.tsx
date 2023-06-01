import { CheckFat, PhoneCall, PhoneX } from "@phosphor-icons/react";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import DashboardOutDoor from "../components/DashboardOutDoor/DashboardOutDoor";
import Drawer from "../components/Drawer/Drawer";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";

const Home = () => {

    

    return (
        <div className="h-screen w-screen flex">
            <Drawer selected={0} />
            <section title="Conteudo principal da página" className="h-screen w-full grow-1 flex flex-col">
                <Header />
                <HeaderMobile />
                <div className="h-full w-full grow-1 flex flex-col md:p-12 pb-3 pl-12 pr-6 md:pt-0 overflow-y-scroll md:overflow-hidden gap-8">
                    <section title="Outdoors" className="grid lg:grid-cols-3 grid-cols-1 md:gap-2 xl:gap-8 w-full">
                        <DashboardOutDoor name="Chamadas Recebidas" quantity_actually={20} quantity_past={10} icon={<PhoneCall className="text-secundary_color" size={20} />} />
                        <DashboardOutDoor name="Atendidas" quantity_actually={20} quantity_past={40} icon={<CheckFat className="text-secundary_color" size={20} />} />
                        <DashboardOutDoor name="Perdidas" quantity_actually={20} quantity_past={10} icon={<PhoneX className="text-secundary_color" size={20} />} />
                    </section>
                    <section className="w-full min-h-[350px] grow-1 bg-red-500">
                        
                    </section>
                </div>
                <BottomNavigationMenu selected={0} />
            </section>
        </div>
    )
}

export default Home;