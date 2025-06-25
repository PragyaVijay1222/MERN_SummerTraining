import { useState, useRef } from "react";

function Show(){
    const [name, setName] = useState("Sam");
    const inputRef = useRef(null);

    function changePersonName(){
        setName(inputRef.current.value);
    }

    return(
        <>
        <h1>
            {name}
        </h1>

        <input type="text" name="person-name" id="person-name" onInput={changePersonName} ref={inputRef} />
        </>
    );
}

export default Show;