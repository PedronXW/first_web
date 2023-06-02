import { Navigate } from "react-router-dom";

interface RouteGuardInterface {
    page: any,
}

const RouteGuard = ({ page }: RouteGuardInterface) => {

    const isAuthenticated = () => {
        return false;
    }

    if(isAuthenticated()) {
        return page;
    } else {
        return <Navigate to={'/login'}/>;
    }
}

export default RouteGuard;