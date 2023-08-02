import { CheckFat, PhoneCall, PhoneX } from '@phosphor-icons/react'
import { useContext, useEffect } from 'react'
import 'react-multi-carousel/lib/styles.css'
import BottomNavigationMenu from '../components/BottomNavigationMenu/BottomNavigationMenu'
import DashboardActiveVoipCarousel from '../components/DashboardActiveVoipCarousel/DashboardActiveVoipCarousel'
import DashboardCallsCarousel from '../components/DashboardCallsCarousel/DashboardCallsCarousel'
import DashboardChart from '../components/DashboardChart/DashboardChart'
import DashboardOutDoor from '../components/DashboardOutDoor/DashboardOutDoor'
import Header from '../components/Header/Header'
import HeaderMobile from '../components/Header/HeaderMobile'
import Drawer from '../components/Lists/Drawer/Drawer'
import { DashboardContext } from '../contexts/DashboardContext'

const Home = () => {
  const {
    dashboardResume,
    fetchDashboardResume,
    fetchExistingVoips,
    fetchTodayCalls,
  } = useContext(DashboardContext)

  useEffect(() => {
    fetchDashboardResume()
    fetchExistingVoips()
    fetchTodayCalls()
  }, [])

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
      <Drawer selected={0} />
      <div className="w-full flex flex-col grow-1 overflow-hidden md:shadow-inner">
        <HeaderMobile />
        <div className="grow-1 w-full flex flex-col overflow-y-scroll">
          <Header title="Bem vindo, Pedro!!" />
          <div className="w-full flex flex-col md:p-12 pb-3 pl-7 pr-6 md:pt-0 mb-4 gap-10">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 xl:gap-8 w-full h-min">
              <DashboardOutDoor
                name="Chamadas Recebidas"
                quantityActually={
                  dashboardResume ? dashboardResume.summary.received : 0
                }
                quantityPast={10}
                icon={<PhoneCall className="text-secundary_color" size={20} />}
              />
              <DashboardOutDoor
                name="Atendidas"
                quantityActually={
                  dashboardResume ? dashboardResume.summary.answered : 0
                }
                quantityPast={40}
                icon={<CheckFat className="text-secundary_color" size={20} />}
              />
              <DashboardOutDoor
                name="Perdidas"
                quantityActually={
                  dashboardResume ? dashboardResume.summary.missed : 0
                }
                quantityPast={10}
                icon={<PhoneX className="text-secundary_color" size={20} />}
              />
            </div>
            <DashboardActiveVoipCarousel />
            <DashboardChart />
            <DashboardCallsCarousel />
          </div>
        </div>
        <BottomNavigationMenu selected={0} />
      </div>
    </div>
  )
}

export default Home
