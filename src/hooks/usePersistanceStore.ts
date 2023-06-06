import { useCookies } from "react-cookie";


export function usePersistanceStore<T>() {

    const [cookies, setCookie, removeCookie] = useCookies();

    const updateValue = (key:string, newValue: T) => {
        setCookie(key, newValue, {path: '/', maxAge: 3600});
    };

    const deleteStore = (key: string) => {
        removeCookie(key);
    }


    return {cookies, updateValue, deleteStore};
}