//Destructuring

let x = 1;
let y = 2;

[x, y] = [y, x];

console.log(x, y);
//swaping positions
const fruits = ["apple", "orange", "banana", "watermelon"];
[fruits[0], fruits[1]] = [fruits[1], fruits[0]];
console.log(fruits);

//assigning to variables
const [fruit1, fruit2, fruit3, ...leftFruits] = fruits;
console.log(fruit3, leftFruits);

//extracting from objects
const player1 = {
    name: "Alex",
    age: 22,
    job:"football player"
}
const player2 = {
    name: "John",
    age: 23,
}

const {name, job = "coach", age} = player2;
console.log(name, age, job);

//destructuring in function parameters
function players({name, job = "unemployed", age}){
    console.log(`The player is: ${name}.`);
    console.log(`The player is a: ${job}.`);
    console.log(`The player is ${age} year/s old.`)
}
players(player1);
players(player2);

//Nested Objects

const customer = {
    name: "Bob",
    lastName:"Boboy",
    age: 33,
    jobs: {
        atSchool: "cleaner",
        atUni: "assistant",
        now: "Engineer",
    }
}
console.log(customer.name + " " + customer.age);
console.log(customer.jobs.atUni);
//loop through properties of a nested objects
for(const property in customer.jobs){
    console.log(customer.jobs[property]);
}



