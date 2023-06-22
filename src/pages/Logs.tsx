import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import Drawer from "../components/Lists/Drawer/Drawer";

const Logs=()=>{
    return(
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={3} />
            <div className="w-full flex flex-col grow-1 overflow-hidden">
                <HeaderMobile />
                <section title="Dashboard" className="grow-1 w-full flex flex-col overflow-y-scroll">
                    <Header title="Ramais"/>
                    
                </section>
                <BottomNavigationMenu selected={3} />
            </div>
        </div>
    )
}

export default Logs;