import { Navigate } from "react-router-dom";
import { usePersistanceStore } from "../hooks/usePersistanceStore";

interface RouteGuardInterface {
    page: any,
}

const RouteGuard = ({ page }: RouteGuardInterface) => {

    const auth=usePersistanceStore<boolean>('auth');

    const isAuthenticated = () => {
        return auth.value==='true';
    }

    if(isAuthenticated()) {
        return page;
    } else {
        return <Navigate to={'/login'}/>;
    }
}

export default RouteGuard;