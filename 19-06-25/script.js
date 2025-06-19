
const heading1 = document.getElementsByTagName("h1");
const heading2 = document.getElementsByTagName("h2");

function changeText(heading){
    heading.textContent = "This is the new heading";
}

function timefunc(heading, time){
    setTimeout(() => changeText(heading), time);
}

const heading = [...heading1, ...heading2];

function callSetTimeoutFunction(arr, time){
    for(let i=0; i<arr.length; i++){
        timefunc(arr[i], time);
        time += 1000;
    }
}

callSetTimeoutFunction(heading, 1000);

const para = document.getElementsByTagName("p");

function changePara(para){
    para.textContent = Math.random();
}

function intervalFunction(para, time){
    let count =1;
    const intervalID =  setInterval(() => {
    count += 1;
    if(count > 5){
        clearInterval(intervalID);
    }
    changePara(para)}, time);
}


for(let i=0; i<para.length; i++){
    intervalFunction(para[i], 1000);
}

// To use the clearInterval and clearTimeoutwe have to catch the id returned while running the setInterval and setTimeout functions.

// Event Listener

function sayHello(){
    console.log("Hello, Button Clicked!")
    alert("Hello, button clicked!")
}

const button = document.getElementById("btn");

button.addEventListener("click", sayHello);

function makeEveryThingLilac(){
    document.body.style.backgroundColor = "purple";
}

const button2 = document.getElementById("btn2");

button2.addEventListener("click", makeEveryThingLilac);

////////////////////////////////////////////////////////

