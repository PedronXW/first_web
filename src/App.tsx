import { Route, Routes } from "react-router-dom";
import RouteGuard from "./guard/RouteGuard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      /*Guarded routes*/
      <Route path="/" element={<RouteGuard page={<Home/>}/>} />

      /*Unguarded routes*/
      <Route path="/login" element={<Login/>}/>
      <Route path="/reset-password" element={<ResetPassword/>}/>
      <Route path="/settings" element={<Settings/>}/>
    </Routes>
  );
}

export default App;
