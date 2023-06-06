import { useState } from "react";
import { Navigate } from "react-router-dom";
import { usePersistanceStore } from "../hooks/usePersistanceStore";

interface RouteGuardInterface {
    page: any,
}

const RouteGuard = ({ page }: RouteGuardInterface) => {
    const [tokenJwt, setTokenJwt] = useState((usePersistanceStore().cookies.token));
    const [refreshTokenJwt, setRefreshTokenJwt] = useState<any>(usePersistanceStore().cookies.refresh_token);

    if (tokenJwt && refreshTokenJwt) {
        return page
    } else {
        return <Navigate to={'/login'} />
    }
}

export default RouteGuard;