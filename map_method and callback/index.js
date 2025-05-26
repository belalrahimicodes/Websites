//Map method and Callback

const cars = ["porsche", "lambo", "mclaren", "bugatti"];

const uppercaseCars = cars.map(uppercase);
const lowercaseCars = cars.map(lowercase);

console.log(uppercaseCars);
console.log(lowercaseCars);

//capitalizing each element in an array
function uppercase(element){
    return element.toUpperCase();
}
//lowercasing each element in an array
function lowercase(element){
    return element.toLowerCase();
}

const dates = ["2023/12/01", "03/01/2025"];
const newDates = dates.map(updateDates);

console.log(newDates);

function updateDates(element){
    //split from the place where it has a / sign
    const sections = element.split("/");
    return `Updated date: ${sections[2]} - ${sections[1]} - ${sections[0]}`;
}

//filter method

const numbers = [1, 2, 3, 4, 5, 6, 7];

//filtering even numbers from an array of numbers
const evenNumbers = numbers.filter(isEven);
console.log(`Even numbers filtered: ${evenNumbers}`);

function isEven(element){
    return element % 2 === 0;
}

//filtering odd numbers from an array of numbers
const oddNumbers = numbers.filter(isOdd);
console.log(`Odd numbers filtered: ${oddNumbers}`);

function isOdd(element){
    return element % 2 !== 0;
}

//filtering adults from an array of different ages
const ages = [12, 14, 88, 34, 18, 90, 23];
const onlyAdults = ages.filter(adults);

console.log(`Adults filtered: ${onlyAdults}`);

function adults(element){
    return element >= 18;
}

//filtering children from an array of different ages
const onlyChildren = ages.filter(children);

console.log(`Children filtered: ${onlyChildren}`);

function children(element){
    return element < 18;
}

//reduce method

const grades = [23, 34, 45, 67, 12, 77];

const sumOf = grades.reduce(add);

console.log(`Sum of numbers is: ${sumOf}`);

function add(accumulator, element){
    return accumulator + element;
}

const maxOf = grades.reduce(max);

console.log(`The max number is: ${maxOf}`);

function max(accumulator, element){
    return Math.max(accumulator, element);
}

//function expressions

setTimeout(function(){
    console.log(`hey man`)
}, 2000);

const nums = [2, 3, 4, 5, 6];

const cubes = nums.map(function(element){
    return Math.pow(element, 3);
});
console.log(`cubes: ${cubes}`);

const squares = nums.map(function(element){
    return Math.pow(element, 2);
});
console.log(`squares: ${squares}`);

const evenNums = nums.filter(function(element){
    return element % 2 === 0;
});

console.log(`Even numbers filtered: ${evenNums}`);

const addNums = nums.reduce(function(accumulator, element){
    return accumulator + element;
});
console.log(`sum of nums: ${addNums}`);
