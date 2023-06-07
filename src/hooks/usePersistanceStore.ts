import { useCookies } from "react-cookie";


export function usePersistanceStore<T>() {

    const [cookies, setCookie, removeCookie] = useCookies();

    const updateValue = (key: string, newValue: T, options?: undefined) => {
        setCookie(key, newValue, options ? options : { path: '/', maxAge: 3600 * 8 });
    };

    const deleteStore = (key: string) => {
        removeCookie(key);
    }

    return { cookies, updateValue, deleteStore };
}