import { Outlet, Route, Routes } from "react-router-dom";
import RouteGuard from "./guard/RouteGuard";
import Call from "./pages/Call";
import Calls from "./pages/Calls";
import ChangePassword from "./pages/ChangePassword";
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

      <Route path="/" element={<RouteGuard page={<Home />} />} />
      <Route path="/settings">
        <Route path="" element={<RouteGuard page={<Settings />} />} />
        <Route path="change-password" element={<RouteGuard page={<ChangePassword />} />} />
      </Route>
      <Route path="/ramais" element={<RouteGuard page={<Ramais />} />} />
      <Route path="/logs" element={<RouteGuard page={<Logs />} />} />
      <Route path="/calls">
          <Route path="" element={<RouteGuard page={<Calls />} />} />
          <Route path=":id" element={<RouteGuard page={<Call />} />} />
      </Route>

      <Route element={
        <div className="h-screen w-screen sm:bg-background_color flex justify-center items-center">
          <section title='Formulário' className="h-screen w-screen bg-secundary_color drop-shadow-3xl rounded-md sm:h-[400px] sm:w-[350px] sm:bg-secundary_color p-8 gap-6 pt-0 pb-0 flex flex-col justify-center">
            <Outlet />
          </section>
        </div>}>
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
    </Routes>
  );
}

export default App;
