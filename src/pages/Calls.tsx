import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import CallsList from "../components/Lists/CallsList/CallsList";
import Drawer from "../components/Lists/Drawer/Drawer";

const Calls=()=>{
    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={2} />
            <div className="h-full w-full flex flex-col grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div className="grow-1 w-full flex flex-col overflow-y-scroll">
                    <Header title="Chamadas"/>
                    <CallsList/>
                </div>
                <BottomNavigationMenu selected={2} />
            </div>
            <div className="h-full min-w-[320px] max-w-[320px] hidden lg:flex lg:flex-col bg-secundary_color drop-shadow-lg">
                
            </div>
        </div>
    )
}

export default Calls;