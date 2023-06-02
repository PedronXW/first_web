import { Route, Routes } from "react-router-dom";
import RouteGuard from "./Guard/RouteGuard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      /*Guarded routes*/
      <Route path="/" element={<RouteGuard page={<Home/>}/>} />
      <Route path="/reset-password" element={<ResetPassword/>}/>
      <Route path="/settings" element={<Settings/>}/>

      /*Unguarded routes*/
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
