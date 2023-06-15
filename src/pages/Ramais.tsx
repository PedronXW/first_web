import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import Drawer from "../components/Lists/Drawer/Drawer";
import RamaisList from "../components/Lists/RamaisList/RamaisList";
import AddRamalButton from "../components/SuspendedComponents/AddRamalButton/AddRamalButton";

const Ramais = () => {

    return (
        <div className="h-screen w-screen grid grid-cols-[240px_auto]">
            <Drawer selected={1} />
            <section title="Dashboard" className="h-screen w-full grow-1 flex flex-col overflow-y-scroll">
                <Header title="Ramais">
                    <AddRamalButton/>
                </Header>
                <HeaderMobile />
                <RamaisList/>
                <BottomNavigationMenu selected={1}/>
            </section>
        </div>
    )
}

export default Ramais;