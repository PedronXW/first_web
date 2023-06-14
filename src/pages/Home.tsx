import { CheckFat, PhoneCall, PhoneX } from "@phosphor-icons/react";
import { enqueueSnackbar } from "notistack";
import { useAppDispatch } from "../app/hooks";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import DashboardChart from "../components/DashboardChart/DashboardChart";
import DashboardOutDoor from "../components/DashboardOutDoor/DashboardOutDoor";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import DashboardRamalList from "../components/Lists/DashboardRamalList/DashboardRamalList";
import Drawer from "../components/Lists/Drawer/Drawer";

const Home = () => {

    const actions = useAppDispatch();

    return (
        <div className="h-screen w-screen grid grid-cols-[240px_auto]">
            <Drawer selected={0} />
            <section title="Dashboard" className="h-screen w-full flex flex-col">
                <Header />
                <HeaderMobile />
                <div className="w-full grow-1 flex flex-col md:p-12 pb-3 pl-7 pr-6 md:pt-0 overflow-y-scroll lg:overflow-hidden gap-10">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 xl:gap-8 w-full h-min">
                        <DashboardOutDoor name="Chamadas Recebidas" quantity_actually={20} quantity_past={10} icon={<PhoneCall className="text-secundary_color" size={20} />} />
                        <DashboardOutDoor name="Atendidas" quantity_actually={20} quantity_past={40} icon={<CheckFat className="text-secundary_color" size={20} />} />
                        <DashboardOutDoor name="Perdidas" quantity_actually={20} quantity_past={10} icon={<PhoneX className="text-secundary_color" size={20} />} />
                    </div>
                    <div className="w-full grow-1 h-full flex-col lg:flex-row flex gap-10" onClick={() => { enqueueSnackbar("ArrozDoce", { variant: 'success' }) }}>
                        <DashboardChart />
                        <DashboardRamalList />
                    </div>
                </div>
                <BottomNavigationMenu selected={0} />
            </section>
        </div>
    )
}

export default Home;