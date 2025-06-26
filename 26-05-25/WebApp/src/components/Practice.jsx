//import { useState, useRef, useEffect} from "react";
    // const [x, setX] = useState(0);
    // const [name, changeN] = useState("");
    // const reference = useRef(null);

    // function increaseX(){
    //     setX(x+1);
    // }

    // function changeName(){
    //     changeN(reference.current.value);
    // }

    // useEffect(() => {
    //     console.log("This is the input : ", {x});
    // }, [x]);

    // return(
    //     <>
    //     <h1>
    //         {name}
    //     </h1>
    //     <input type="text" id="inputName" name="inputName" onInput={changeName} ref={reference}/>
    //     <p id="input">{x}</p>
    //     <button type="submit" id="btn" onClick={increaseX}>Click me!</button>
    //     </>
    // )


//   const [count, setCount] = useState(0);
//   const inputRef = useRef(null);

//   useEffect(() => {
//     // Timeout example
//     const timeout = setTimeout(() => {
//       console.log("Initial delay of 1 second");
//     }, 1000);

//     // Interval example
//     const interval = setInterval(() => {
//       setCount(prev => prev + 1);
//     }, 2000);

//     // Event listener
//     const handleClick = () => {
//       console.log("Document clicked");
//     };
//     document.addEventListener('click', handleClick);

//     // Cleanup
//     return () => {
//       clearTimeout(timeout);
//       clearInterval(interval);
//       document.removeEventListener('click', handleClick);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <input ref={inputRef} placeholder="Type something..." />
//     </div>
//   );

import React, { useState, useEffect, useRef } from 'react';

function Practice() {
  const [x, setX] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClick = () => setX(prev => prev + 1);
    const btn = buttonRef.current;

    if (btn) {
      btn.addEventListener('click', handleClick);
    }

    return () => {
      if (btn) {
        btn.removeEventListener('click', handleClick);
      }
    };
    }, []); 

  return (
    <>
      <p>{x}</p>
      <button ref={buttonRef}>Click me</button>
    </>
  );
}

export default Practice;

