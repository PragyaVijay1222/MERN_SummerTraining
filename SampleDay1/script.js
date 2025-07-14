console.dir(window);

const person = {
    firstname: "Pragya",
    lastname: "Vijay",
    printname: function(){
        console.log(this.firstname+ " " + this.lastname);
    }
};

person.printname();

const heading = document.getElementById("heading");
console.log(heading);
console.log(heading.textContent)

heading.textContent = "This is the new heading";

heading.style.fontSize = "40px";

const para = document.getElementsByTagName("p");

console.log(para[0]);

para[0].style.color = "blue";

const para1 = document.createElement("p");
para1.textContent = "This is the new para added through javascript.";
document.body.appendChild(para1); // With append we can append multiple elements but with appendChild we can append single element at a time.

const para2 = para[1];
document.body.removeChild(para2);


