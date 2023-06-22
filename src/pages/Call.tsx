import AudioPlayer from "../components/AudioPlayer/AudioPlayer";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import Drawer from "../components/Lists/Drawer/Drawer";


const Call = () => {
    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={2} />
            <div className="w-full flex flex-col grow-1 overflow-hidden">
                <HeaderMobile />
                <section title="Dashboard" className="grow-1 w-full flex flex-col">
                    <Header title="Chamada 1687271212.464" />
                    <div className="grow-1 w-full px-10 pb-5">
                        <AudioPlayer audio_id="1687271212.464" client="d471de34-7bca-46dd-acde-e173c85813ff" />
                    </div>
                </section>
                <BottomNavigationMenu selected={2} />
            </div>
        </div>
    )
}

export default Call;