import useLocalStorage from "./useLocalStorage"

const useLogout = () => {
    useLocalStorage("", "REMOVE");
    
}