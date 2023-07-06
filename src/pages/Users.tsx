import AddButton from "../components/AddButton/AddButton";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import Drawer from "../components/Lists/Drawer/Drawer";
import UsersList from "../components/Lists/UsersList/UsersList";

const Users = () => {
    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={4} />
            <div className="w-full flex flex-col h-full grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div className="grow-1 w-full h-full flex flex-col overflow-y-scroll pb-4">
                    <Header title="Usuários" />
                    <UsersList />
                    <AddButton>
                        <div className="h-72 w-full bg-secundary_color rounded-lg flex justify-center items-center">
                            <h1>12</h1>
                        </div>
                    </AddButton>
                </div>
                <BottomNavigationMenu selected={4} />
            </div>
        </div>
    )
}

export default Users;