import { useState } from "react";

function Name(){

    const val = useState("Name");
    let value = val[0];
    let setValue = val[1];

    function onclickName(){
        // if(value == "Prachi"){
        // setValue("Pragya");}
        // else{
        //     setValue("Prachi")
        // }
        let namegiven = document.getElementById("firstname");
        let nameGiven = namegiven.value;
        setValue(nameGiven);
    }

    return(
        <>
        <h1 id="name">{value}</h1>
        <label htmlFor="firstname">Enter your first name:
                <input type="text" name="firstname" id="firstname" required/>
        </label>
        <button type="submit" id="button" onClick={onclickName}>Change</button>
        </>
    )
}

export default Name;