import { CheckFat, PhoneCall, PhoneX } from "@phosphor-icons/react";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import DashboardChart from "../components/DashboardChart/DashboardChart";
import DashboardOutDoor from "../components/DashboardOutDoor/DashboardOutDoor";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import DashboardCallList from "../components/Lists/DashboardCallsList/DashboardCallList";
import Drawer from "../components/Lists/Drawer/Drawer";

const Home = () => {

    

    return (
        <div className="h-screen w-screen flex">
            <Drawer selected={0} />
            <section title="Dashboard" className="h-screen w-full grow-1 flex flex-col">
                <Header />
                <HeaderMobile />
                <div className="h-full w-full grow-1 flex flex-col md:p-12 pb-3 pl-7 pr-6 md:pt-0 overflow-y-scroll lg:overflow-hidden gap-8">
                    <div className="grid lg:grid-cols-3 grid-cols-1 md:gap-2 xl:gap-8 w-full h-min">
                        <DashboardOutDoor name="Chamadas Recebidas" quantity_actually={20} quantity_past={10} icon={<PhoneCall className="text-secundary_color" size={20} />} />
                        <DashboardOutDoor name="Atendidas" quantity_actually={20} quantity_past={40} icon={<CheckFat className="text-secundary_color" size={20} />} />
                        <DashboardOutDoor name="Perdidas" quantity_actually={20} quantity_past={10} icon={<PhoneX className="text-secundary_color" size={20} />} />
                    </div>
                    <div className="w-full grow-1 h-full flex-col lg:flex-row lg:flex gap-6">
                        <DashboardChart/>
                        <DashboardCallList/>
                    </div>
                </div>
                <BottomNavigationMenu selected={0} />
            </section>
        </div>
    )
}

export default Home;