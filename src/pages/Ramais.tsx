import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import Drawer from "../components/Lists/Drawer/Drawer";
import RamaisList from "../components/Lists/RamaisList/RamaisList";
import AddRamalButton from "../components/SuspendedComponents/AddRamalButton/AddRamalButton";

const Ramais = () => {

    return (
        <div className="h-screen w-screen flex flex-col md:grid md:grid-cols-[240px_auto]">
            <Drawer selected={1} />
            <div className="w-full flex flex-col grow-1 overflow-hidden">
                <HeaderMobile />
                <section title="Dashboard" className="grow-1 w-full flex flex-col overflow-y-scroll">
                    <Header title="Ramais">
                        <AddRamalButton />
                    </Header>
                    <RamaisList />
                </section>
                <BottomNavigationMenu selected={1} />
            </div>
        </div>
    )
}

export default Ramais;