import { useState } from "react";
import { useEffect } from "react";
//React remembers it's state variable. 

export const Component1 = () => {

    let x = 10;
    const [y, setY] = useState(0);

    function increaseX(){  //Will just increse the value but will not get rendered on UI, but if we will initialize x outside component, the after clicking the button for y, x will also show the current value.
        x = x+1;
    }

    function increaseY(){  //Will render the change automatically.
        setY(y+1);
    }

    //UseEffect - It detects the changes in state variables.

   useEffect(() =>{
    console.log("Value of y has changed");
   }, [y])  // If the array will be empty then it will output only once. 

    return(
        <>
        <p>{x}</p>
        <p>{y}</p>

        <button type ="button" onClick={increaseX}>Increase X</button>
        <button type ="button" onClick={increaseY}>Increase Y</button>
        </>
    )
}
