import { useState } from "react";
import { PersonContext } from "../context/PersonContext";

export const PersonProvider = ({children}) => {
    const [person, setPerson] = useState("Raj");

    return(
        <PersonContext.Provider value={{person, setPerson}}>
            {children}
        </PersonContext.Provider>
    )
}