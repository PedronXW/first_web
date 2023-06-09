import { Outlet, Route, Routes } from "react-router-dom";
import Notification from "./components/Notification/Notification";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Settings from "./pages/Settings";

function App() {

  console.log("arroz")

  /*Guarded routes <RouteGuard page={} />*/

  return (
    <Routes>
      <Route element={
        <main className="h-full w-full">
          <Outlet />
          <Notification />
        </main>
      }>
        
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />


        <Route element={
          <div className="h-screen w-screen sm:bg-grey flex justify-center items-center">
            <section title='Formulário' className="h-screen w-screen bg-secundary_color drop-shadow-3xl rounded-md sm:h-[400px] sm:w-[350px] sm:bg-secundary_color p-8 gap-6 pt-0 pb-0 flex flex-col justify-center">
              <Outlet />
            </section>
          </div>}
        >
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
