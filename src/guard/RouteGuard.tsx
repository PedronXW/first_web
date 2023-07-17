import { Navigate } from "react-router-dom";
import { usePersistanceStore } from "../hooks/usePersistanceStore";
import useSecurity from "../hooks/useSecurity";

interface RouteGuardInterface {
    page: any,
    restricted?: boolean
}

const RouteGuard = ({ page, restricted }: RouteGuardInterface) => {
    const tokenJwt = usePersistanceStore().value.token;
    const refreshTokenJwt = usePersistanceStore().value.refresh_token;
    
    const isSecurited  = useSecurity();

    if (tokenJwt && refreshTokenJwt) {
        if(restricted){
            if(isSecurited){
                return page
            }
            return <div>Vc não tem acesso</div>
        }
        return page
    } else {
        return <Navigate to={'/login'} />
    }
}

export default RouteGuard;