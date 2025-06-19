
const button_a = document.getElementById("button1");
const button_b = document.getElementById("button2");
const button_c = document.getElementById("button3");
const data = document.getElementsByTagName("h3")[0];

const previousCountValue = localStorage.getItem("data");

function increase(){
    let num = parseInt(data.textContent);
    data.textContent = num +1;
    localStorage.setItem("data", data.textContent);

}

function decrease(){
    let num = parseInt(data.textContent);
    data.textContent = num -1;
    localStorage.setItem("data", data.textContent);
}

function reset(){
    data.textContent = 0;
    localStorage.setItem("data", data.textContent);
}

button_a.addEventListener("click", increase);
button_b.addEventListener("click", decrease);
button_c.addEventListener("click", reset);

// Local storage set item (key, value).

