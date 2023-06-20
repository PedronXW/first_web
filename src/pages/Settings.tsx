import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import Drawer from "../components/Lists/Drawer/Drawer";
import SettingsList from "../components/Lists/SettingsList/SettingsList";

const Settings = () => {
    return(
        <div className="h-screen w-screen flex flex-col md:grid md:grid-cols-[240px_auto]">
            <Drawer selected={4} />
            <section title="Dashboard" className="h-screen w-full grow-1 flex flex-col overflow-y-scroll mb-16">
                <Header title="Configurações"/>
                <HeaderMobile/>
                <SettingsList/>
                <BottomNavigationMenu selected={4}/>
            </section>
        </div>
    )
}

export default Settings;