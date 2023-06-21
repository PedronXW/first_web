import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import Drawer from "../components/Lists/Drawer/Drawer";
import SettingsList from "../components/Lists/SettingsList/SettingsList";

const Settings = () => {
    return(
        <div className="h-screen w-screen flex flex-col md:grid md:grid-cols-[240px_auto]">
            <Drawer selected={4} />
            <div className="w-full flex flex-col grow-1 overflow-hidden">
                <HeaderMobile />
                <section title="Dashboard" className="grow-1 w-full flex flex-col overflow-y-scroll">
                    <Header title="Ramais"/>
                    <SettingsList/>
                </section>
                <BottomNavigationMenu selected={4} />
            </div>
        </div>
    )
}

export default Settings;