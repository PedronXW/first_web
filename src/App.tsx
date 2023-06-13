import { Outlet, Route, Routes } from "react-router-dom";
import Notification from "./components/Notification/Notification";
import RouteGuard from "./guard/RouteGuard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logs from "./pages/Logs";
import Ramais from "./pages/Ramais";
import ResetPassword from "./pages/ResetPassword";
import Settings from "./pages/Settings";

function App() {

  /*Guarded routes <RouteGuard page={} />*/

  return (
    <Routes>

      <Route path="*" element={<div>Não tem</div>} />

      <Route element={
        <main className="h-full w-full">
          <Outlet />
          <Notification />
        </main>}>

            <Route path="/" element={<RouteGuard page={<Home />} />} />
            <Route path="/settings" element={<RouteGuard page={<Settings />} />} />
            <Route path="/ramais" element={<RouteGuard page={<Ramais />} />} />
            <Route path="/logs" element={<RouteGuard page={<Logs />} />} />


            <Route element={<div className="h-screen w-screen sm:bg-grey flex justify-center items-center">
                <section title='Formulário' className="h-screen w-screen bg-secundary_color drop-shadow-3xl rounded-md sm:h-[400px] sm:w-[350px] sm:bg-secundary_color p-8 gap-6 pt-0 pb-0 flex flex-col justify-center">
                  <Outlet />
                </section>
              </div>}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
            </Route>
      </Route>



      


    </Routes>
  );
}

export default App;
