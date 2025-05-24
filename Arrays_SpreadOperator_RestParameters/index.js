//Arrays
let cars = ["ferrari", "bugatti", "mclaren", "mercedes"];

for(i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

cars.push("hummer");
cars.pop();
cars.unshift("porsche");
cars.shift();
console.log(cars[i]);

//sorting an array in reverse
cars.sort().reverse();
console.log(cars[i]);

//spread operator
let newCars = [...cars, "toyota"];
console.log(newCars[i]);
//finding min and max in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maxNum = Math.max(...numbers);
let minNum = Math.min(...numbers);

console.log(`max number: ${maxNum}`, `min number: ${minNum}`);

//Rest Parameters
const car1 = "mclaren";
const car2 = "toyota";
const car3 = "benz";

const carModels = companies(car1, car2, car3);

function companies(...carModels){
    console.log(...carModels);
    console.log(carModels);
}
//sum of all numbers with Rest Parameter
function add(...nums){
    let answer = 0;
    for(let num of nums){
        answer += num;
    }
    return answer;
}
const addResult = add(5, 6, 7);
console.log(`sum is: ${addResult}`);

//average numbers with Rest Parameter
function findAverage(...nums){
    let answer = 0;
    for(let num of nums){
        answer += num;
    }
    return answer / nums.length;
}
const resultAverage = findAverage(5, 6, 7);
console.log(`average is: ${resultAverage}`);

//combine strings
function combineStrins(...cars){
    return cars.join("-");
}
const allCars = combineStrins(...cars);
console.log(allCars);
