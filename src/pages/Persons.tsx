import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import Drawer from "../components/Lists/Drawer/Drawer";

const Persons = () => {
    return (
        <div className="h-screen w-screen flex">
            <Drawer selected={1} />
            <section title="Dashboard" className="h-screen w-full grow-1 flex flex-col">
                <Header />
                <HeaderMobile />
            </section>
        </div>
    )
}

export default Persons;