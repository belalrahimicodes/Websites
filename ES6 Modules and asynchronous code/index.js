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