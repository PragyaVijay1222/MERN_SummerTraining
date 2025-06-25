import { useState } from "react";
function Counter(){

    const val = useState(0);
    let value = val[0];
    let setValue = val[1];

    function onclicki(){
        setValue(value+1);
    }
    function onclickd(){
        setValue(value-1);
    }
    function onclickr(){
        setValue(0);
    }
    return(
        <>
        <p>{value}</p>
        <button type="submit" id="increase" onClick={onclicki}>Increase</button>
        <button type="submit" id="reset" onClick={onclickr}>Reset</button>
        <button type="submit" id="decrease" onClick={onclickd}>Decrease</button>
        </>
    )
}

export default Counter;