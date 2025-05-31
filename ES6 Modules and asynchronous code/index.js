//ES6 Modules; importing functions from another js file so that I can use them here
import {add, subtract, multiply, division} from "./math.js";

const addNums = add(2, 3);
console.log(addNums);

const subNums = subtract(3,2);
console.log(subNums);

const divideNums = division(4, 2);
console.log(divideNums);

const multiplyNums = multiply(2,2);
console.log(multiplyNums);

//asynchronous code
function task1(callback){
    setTimeout(() => {
        console.log("text 1");
    callback()}, 2000);
}

function task2(){
    console.log("text 2");
    setTimeout(() =>{
        console.log("text 3");
    }, 3000);
    console.log("text 4");
}

task1(task2);

//Error handling

try{
    console.log(a);
}
catch(error){
    console.error(error);
}
finally{
    console.log("This part of the code in error handling always runs.");
}

//ex2

try{
    const num1 = Number(window.prompt("Enter your first number:"));
    const num2 = Number(window.prompt("Enter your second number:"));
    
    if(num2 == 0){
        throw new Error("Your number can't be divided by 0!");
    }
    if(isNaN(num1) || isNaN(num2)){
        throw new Error("Please enter a number!");
    }
    const result = num1 / num2;
    console.log(result);
}
catch(error){
    console.error(error);
}
finally{
    console.log("This code always runs.");
}