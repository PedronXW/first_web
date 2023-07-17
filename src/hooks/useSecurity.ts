import jwt_decode from "jwt-decode";
import { usePersistanceStore } from "./usePersistanceStore";

const useSecurity = () => {
    const tokenJwt = usePersistanceStore().value.token;

    if (!tokenJwt) return false;
    
    var { is_admin } = jwt_decode(tokenJwt) as any;

    return is_admin ? true : false;
}

export default useSecurity;