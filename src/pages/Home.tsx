import { CheckFat, PhoneCall, PhoneX } from "@phosphor-icons/react";
import 'react-multi-carousel/lib/styles.css';
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import DashboardCallsCarousel from "../components/DashboardCallsCarousel/DashboardCallsCarousel";
import DashboardChart from "../components/DashboardChart/DashboardChart";
import DashboardOutDoor from "../components/DashboardOutDoor/DashboardOutDoor";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import Drawer from "../components/Lists/Drawer/Drawer";

const Home = () => {

    


    return (
        <div className="h-screen w-screen flex flex-col md:grid md:grid-cols-[240px_auto]">
            <Drawer selected={0} />
            <section title="Dashboard" className="h-screen w-full flex flex-col overflow-y-scroll">
                <Header title="Bem vindo de volta, Pedro" />
                <HeaderMobile />
                <div className="w-full  flex flex-col md:p-12 pb-3 pl-7 pr-6 md:pt-0 mb-20 gap-10">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 xl:gap-8 w-full h-min">
                        <DashboardOutDoor name="Chamadas Recebidas" quantity_actually={20} quantity_past={10} icon={<PhoneCall className="text-secundary_color" size={20} />} />
                        <DashboardOutDoor name="Atendidas" quantity_actually={20} quantity_past={40} icon={<CheckFat className="text-secundary_color" size={20} />} />
                        <DashboardOutDoor name="Perdidas" quantity_actually={20} quantity_past={10} icon={<PhoneX className="text-secundary_color" size={20} />} />
                    </div>
                    <DashboardChart />
                    <DashboardCallsCarousel calls={[1,2,3,4,56,7,8,9]}/>
                </div>
                <BottomNavigationMenu selected={0} />
            </section>
        </div>
    )
}

export default Home;