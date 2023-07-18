import { Outlet, Route, Routes } from 'react-router-dom'
import RouteGuard from './guard/RouteGuard'
import Calls from './pages/Calls'
import ChangePassword from './pages/ChangePassword'
import Home from './pages/Home'
import Login from './pages/Login'
import Logs from './pages/Logs'
import Queue from './pages/Queue'
import Queues from './pages/Queues'
import ResetPassword from './pages/ResetPassword'
import Settings from './pages/Settings'
import SystemSettings from './pages/SystemSettings'
import User from './pages/User'
import Users from './pages/Users'
import UsersAdd from './pages/UsersAdd'

function App() {
  /* Guarded routes <RouteGuard page={} /> */

  return (
    <Routes>
      <Route path="*" element={<div>Não tem</div>} />

      <Route path="/" element={<RouteGuard page={<Home />} />} />
      <Route path="/settings">
        <Route path="" element={<RouteGuard page={<Settings />} />} />
        <Route
          path="change-password"
          element={<RouteGuard page={<ChangePassword />} />}
        />
        <Route path="users">
          <Route path="" element={<RouteGuard page={<Users />} />} />
          <Route path="add" element={<RouteGuard page={<UsersAdd />} />} />
          <Route path=":id" element={<RouteGuard page={<User />} />} />
        </Route>
        <Route
          path="system-settings"
          element={<RouteGuard page={<SystemSettings />} />}
        />
      </Route>
      <Route path="/queues">
        <Route path="" element={<RouteGuard page={<Queues />} />} />
        <Route path=":id" element={<RouteGuard page={<Queue />} />} />
      </Route>
      <Route path="/logs" element={<RouteGuard page={<Logs />} />} />
      <Route path="/calls" element={<RouteGuard page={<Calls />} />} />

      <Route
        element={
          <div className="h-screen w-screen sm:bg-background_color flex justify-center items-center">
            <section
              title="Formulário"
              className="h-screen w-screen bg-secundary_color drop-shadow-3xl rounded-md sm:h-[400px] sm:w-[350px] sm:bg-secundary_color p-8 gap-6 pt-0 pb-0 flex flex-col justify-center"
            >
              <Outlet />
            </section>
          </div>
        }
      >
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  )
}

export default App
