import BottomNavigationMenu from '../components/BottomNavigationMenu/BottomNavigationMenu'
import Header from '../components/Header/Header'
import HeaderMobile from '../components/Header/HeaderMobile'
import Drawer from '../components/Lists/Drawer/Drawer'
import SettingsList from '../components/Lists/SettingsList/SettingsList'

const Settings = () => {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
      <Drawer selected={4} />
      <div className="w-full flex flex-col h-full grow-1 overflow-hidden md:shadow-inner">
        <HeaderMobile />
        <div className="grow-1 w-full h-full flex flex-col overflow-y-scroll">
          <Header title="Configurações" />
          <div className="flex flex-col pb-2">
            <SettingsList />
          </div>
        </div>
        <BottomNavigationMenu selected={4} />
      </div>
    </div>
  )
}

export default Settings
