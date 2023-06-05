import { useJwt } from "react-jwt";
import { Navigate } from "react-router-dom";
import { usePersistanceStore } from "../hooks/usePersistanceStore";

interface RouteGuardInterface {
    page: any,
}

const RouteGuard = ({ page }: RouteGuardInterface) => {

    const tokenJwt=useJwt(usePersistanceStore<boolean>('token').value);
    const refresh_tokenJwt=useJwt(usePersistanceStore<boolean>('refresh_token').value);

    if(!tokenJwt.isExpired){
        return page;
    }else{
        if(!refresh_tokenJwt.isExpired){
            return page;
        }else{
            return <Navigate to={'/login'}/>;
        }
    }
}

export default RouteGuard;