"use strict"; 

/* Data types in js: Number, string, boolean, undefined, null, symbol, object We use objects in case of key value pair. For defining variables: var, let, const. 
var can be overwriten easily. But in case of let we can't make 2 variables with same name.
In case of var, console.log() before initialization will not give error as js knows before function calling that there is a variable inside. Concept: hoisting. and will return undefined. 
but that's not the case for let and const. For them error will return. */

var variable1;
var variable2 = 78;
var variable6 = 99;
let variable3;
let variable4 = 'Abcde';
const variable5 = true; //const should be initialized;

console.log("Pragya Vijay");

let variable7 = variable2 + variable6;
console.log(variable7);

if(variable2 % 2 == 0){
    console.log("Even number");
}else{
    console.log("Odd number");
}

for(let i=0; i<11; i++){
    console.log(i);
    console.log("\n");
}

let variable8 = 13;

if(variable8 >=18){
    console.log("Eligible");
}else{
    console.log("Not eligible");
}

//Alert and promt are not the part of javascript, they are provided by the browser.

//In arrays we can store different datatypes at the same time.

const array = [24.7, "Pragya Vijay", true, variable1, variable7];

var obj = {
    name: "Pragya Vijay",
    age: 22,
    subject: "MERN"
};

const student_name = obj.name;
const student_age = obj.age;

//An anonymous function is a function without a name. They are often used in situations where a function is needed for a short period and doesn't need to be reused elsewhere. 

function greet(){
    console.log("Good morning!");
}

function personalizedGreetings(name){ //we can add argument here which will be a default value.
    console.log("Good morning "+name+" !");
}

function secretKey(){
    return "ehbgfyildwswff";
}

function addition(a,b){
    return a+b;
}

const multiplication = function(a,b){ //Function expression
    return a*b;
}

const subtract = (a,b) => a-b; //Arrow function;

// 1 + '1' = '11' concatenation but 1 -'1' = 0

let variable9 = 'abcdefgh';

//String functions

console.log(variable9.length);
console.log(variable9.substring(2,7));
console.log(variable9.charAt(6));
console.log(variable9.at(4));
console.log(variable9.charCodeAt(6));
console.log(variable9.split(","));
console.log(variable9.concat(" ", variable3));
console.log(variable9.trim());
console.log(variable9.trimStart());
console.log(variable9.replace("a","z"));

//Array functions

const arr = ["abc", 78, "def", 87, "ghi"];

let sec = 42867;

function time(second){
    let hrs = Math.floor(second/ 3600);
    let min = Math.floor((second - hrs * 3600)/ 60);
    let seco = Math.floor(second - min *60 - hrs *3600)

    console.log("Time- ", String(hrs).padStart(2,'0'), " : ", String(min).padStart(2,'0'), " : ", String(seco).padStart(2,0));
}

time(sec);
time(7);

let sentance = "abc abcdef acd ghijhgi kkk";

function largestWord(sen){
    let index =0;
    let len = 0;
    let arr = sen.split(" ");

    for(let i=0; i<arr.length; i++){
        if(arr[i].length > len){
            len = arr[i].length;
            index = i;
        } 
    }
    console.log(arr[index]);
}

largestWord(sentance);