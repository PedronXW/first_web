import { Navigate } from "react-router-dom";
import useAccessible from "../hooks/useAccessible";
import { usePersistanceStore } from "../hooks/usePersistanceStore";

interface RouteGuardInterface {
    page: any,
    restricted?: boolean
}

const RouteGuard = ({ page, restricted }: RouteGuardInterface) => {
    const tokenJwt = usePersistanceStore().value.token;
    const refreshTokenJwt = usePersistanceStore().value.refresh_token;
    
    const isAccessible  = useAccessible();

    if (tokenJwt && refreshTokenJwt) {
        if(restricted){
            if(isAccessible){
                return page
            }
            return <div>Vc não tem acesso otário</div>
        }
        return page
    } else {
        return <Navigate to={'/login'} />
    }
}

export default RouteGuard;