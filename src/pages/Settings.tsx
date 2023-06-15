import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import Drawer from "../components/Lists/Drawer/Drawer";

const Settings = () => {
    return(
        <div className="h-screen w-screen grid grid-cols-[240px_auto]">
            <Drawer selected={3} />
            <section title="Dashboard" className="h-screen w-full grow-1 flex flex-col overflow-y-scroll">
                <Header title="Configurações"/>
                <HeaderMobile/>
                
                <BottomNavigationMenu selected={3}/>
            </section>
        </div>
    )
}

export default Settings;