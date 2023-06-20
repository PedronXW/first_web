import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import CallsList from "../components/Lists/CallsList/CallsList";
import Drawer from "../components/Lists/Drawer/Drawer";

const Calls=()=>{
    return (
        <div className="h-screen w-screen flex flex-col md:grid md:grid-cols-[240px_auto]">
            <Drawer selected={2} />
            <section title="Dashboard" className="h-screen w-full grow-1 flex flex-col overflow-y-scroll">
                <Header title="Chamadas"/>
                <HeaderMobile />
                <CallsList/>
                <BottomNavigationMenu selected={2}/>
            </section>
        </div>
    )
}

export default Calls;