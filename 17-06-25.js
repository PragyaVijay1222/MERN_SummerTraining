// Arithemetic operators

let x = 10;
let y = 5;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

// Assignment operators

console.log(x += y);
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);
console.log(x %= y);
console.log(x **= y);


// Normal functions can be hoisted. That is we can call the functions before the defination code. Disadvantage of this is that it takes memory allocation
// doesn't matter if called or not.
// Var have functional scope. Whereas let have block scope.

// Type conversion

console.log("1" + 1);            //Changes to string
console.log("1" - 1);            //Changes to number
console.log("1" * 1);            //Changes to number
console.log("1" / 1);            //Changes to number

//Comparator functions

console.log("1" == 1);
console.log("1" === 1);

// Array functions

let arr = [1,2,"hello"];

arr.push("world");
console.log(arr[arr.length-1]);

arr.shift();
console.log(arr[0]);

arr.unshift("tth");
console.log(arr[0]);

let str = arr.toString();
console.log(str);

console.log(arr.at(2));

console.log(arr.pop());

arr.splice(3,1,"Hey","how","2");

console.log(arr);
// Nesting

const arr1 = [1, "abc", { name: "Myname", age: 25, subject: "Javascript"}];

let obj ={
    name: "Pragya",
    age: 22,
    subjects: ["Java", "C++", "Python"]
};

console.log(arr1);

// Call-back function - When we pass one function in another as a argument. The argument function will be a call-back function.

function func2(){
    console.log("2");
}

function func1(callback){
    console.log("1");
    callback();
    console.log("3");
}

func1(func2);

// Another example

function c(){
    console.log("3");
}

function b(callback){
    console.log("2");
    callback();
    console.log("4");
}

function a(callback1, callback2){
    console.log("1");
    callback1(callback2);
    console.log("5");
}

a(b, c);

