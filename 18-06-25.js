let variable1 = 24;
console.log(variable1);

let variable2 = variable1;
variable2 = 6;

console.log(variable1);
console.log(variable2);

let arr1 = ["abcd", 1, 2, 3];
let arr2 = arr1;
arr2.push("efgh");

console.log(arr1);
console.log(arr2); //both will have same output. Datatypes array, object, function are refernce type[will point the same value after asigning] and hence will behave this way. They get stored in heap memory. 

let obj1 = {
    name: "Pragya",
    age: 22,
    subject: "DSA"
};

let obj2 = obj1;

let obj3 = {
    name: "Prachi",
    age: 21
};

Object.assign(obj2, obj3);

console.log(obj2);
console.log(obj1);

// But this can be a issue. Solution: Spread operation (...). It makes of copy rather than just referncing.

let ar1 = [1,2,3,4,"abcd"];
let ar2 = [...ar1];

console.log(ar1);
console.log(ar2);

// likewise,

let a1 = [1,2,3];
let a2 = [4,5,6];

let a3 = [...a1, ...a2];

console.log(a3);

// Some important array and object methods

let arr = [1,2,3,4,5,"abcde"];

console.log(arr.length);
console.log(arr.join("*"));
console.log(arr.push(88));
console.log(arr.pop());
console.log(arr.slice(2,4));
console.log(arr.shift());
console.log(arr.unshift("hello"));
console.log(arr.concat(arr1));
console.log(arr.indexOf(4));
console.log(arr.lastIndexOf(5));
console.log(arr.includes("abcd"));
console.log(typeof(arr));
console.log(typeof(obj1));
console.log(Array.isArray(arr1))

let arr11 = [1,2,3,4,5,6];

function computeSquare(element){
    return (element*element);
}

function print(element){
    console.log(element);
}

let arr12 = arr11.map(computeSquare);
arr11.forEach(print);
console.log(arr12)

function parentfunc(){
    return function childfunc(){
        console.log("Hi, i am child function");
    }
}

const val = parentfunc(); // Val will be a function now.
val();

// revise: Callbacks, clousers, Global execution context

// console.dir(window);

// const person = {
//     firstname: "Pragya",
//     lastname: "Vijay",
//     printname: function(){
//         console.log(this.firstname+ " " + this.lastname);
//     }
// };

// person.printname();

// const heading = document.getElementById("heading");
// console.log(heading);
// console.log(heading.textContent)

// heading.textContent = "This is the new heading";

// heading.style.fontSize = "40px";

// const para = document.getElementsByTagName("p");

// console.log(para[0]);

// para[0].style.color = "blue";

// const para1 = document.createElement("p");
// para1.textContent = "This is the new para added through javascript.";
// document.body.appendChild(para1); // With append we can append multiple elements but with appendChild we can append single element at a time.

// const para2 = para[1];
// document.body.removeChild(para2);
