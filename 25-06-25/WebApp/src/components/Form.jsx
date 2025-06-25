import { useState } from "react";

function Form(){
    function onFormSubmit(event){
        event.preventDefault();
        console.log("You have submitted the form successfully!")

        // const firstName = document.getElementById("firstname");
        // const lastName = document.getElementById("lastname");

        // console.log(firstName.value);
        // console.log(lastName.value);

        const form = document.getElementById("form");
        const formData = new FormData(form);

        for (const obj of formData.entries()){
            console.log(obj);
        }
    }

    const val = useState(0); //hook

    let value = val[0];
    let setValue = val[1];

    function onclick(){
        // const Para = document.getElementById("para");
        // value = value+1;
        // Para.textContent = value;
        setValue(value+1);
    }
    return(
        <>
        <form action="/feedback" onSubmit={onFormSubmit} id="form">
            <label htmlFor="firstname">Enter your first name:
                <input type="text" name="firstname" id="firstname" required/>
            </label>
            <label htmlFor="lastname">Enter your last name:
                <input type="text" name="lastname" id="lastname" required/>
            </label>

            <button type="submit" id="button" onClick={onclick}>Submit</button>
            <p id="para">{value}</p>
        </form>
        </>
    )
}

export default Form;