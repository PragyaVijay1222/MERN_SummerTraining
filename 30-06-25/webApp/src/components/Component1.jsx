import { useState, useContext } from "react";
import { PersonContext } from "../context/PersonContext";

export const Component1 = () => {

    const {person, setPerson} = useContext(PersonContext);

    return(
        <div className="w-[600px] h-[600px] flex flex-col items-center justify-center gap-4 bg-red-500">
            <p>{person}</p>
        </div>
    )
}