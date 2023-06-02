import { useState } from "react";
import { useCookies } from "react-cookie";


export function usePersistanceStore<T>(key: string, item_number?: number) {

    const [cookies, setCookie, removeCookie] = useCookies([key]);

    const [value, setValue]=useState(cookies[item_number?item_number:0]);

    const updateValue = (newValue: T) => {
        setCookie(key, newValue);
    };

    const deleteStore = () => {
        removeCookie(key);
    }

    return {value, updateValue, deleteStore};
}