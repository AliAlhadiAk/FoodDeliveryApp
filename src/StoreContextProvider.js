import { createContext } from "react";
import { food_list } from "./Components/assets/assets";

export const StoreContext = createContext({});

const StoreContextProvider = (props) => {
    const contextVal = {
        food_list
    }
    return(
        <StoreContext.Provider value={contextVal}>
            props.children
        </StoreContext.Provider>
    )
}
export default StoreContextProvider