import { useCookies } from "react-cookie";


export function usePersistanceStore<T>(key: string, item_number?: number) {

    const [cookies, setCookie, removeCookie] = useCookies([key]);

    var value=cookies.auth;

    const updateValue = (newValue: T) => {
        setCookie(key, newValue, {path: '/', maxAge: 3600});
        value=newValue;
    };

    const deleteStore = () => {
        removeCookie(key);
    }

    return {value, updateValue, deleteStore};
}