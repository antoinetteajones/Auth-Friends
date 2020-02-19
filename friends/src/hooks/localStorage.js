import {useState}  from "react";

export const useLocalStorage =(key, initialValue) => {
    const [storeValue, setStoreValue] = useState() => {
        if(window.localStorage.getItem(key)){
            return JSON.parse(window.localStorage.getItem(key));
        }
        return initialValue;
    }

}