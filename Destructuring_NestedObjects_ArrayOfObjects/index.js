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

//new example with classes

class Student{
    constructor(name, age, ...jobs){
        this.name = name,
        this.age = age,
        this.jobs = new Jobs(...jobs);
    }
}
class Jobs{
    constructor(atSchool, atUni, now){
        this.atSchool = atSchool,
        this.atUni = atUni,
        this.now = now
    }
}

const student1 = new Student("Alex", 22, "unemployed", "assistant", "Engineer");
console.log(student1.jobs.atSchool);

//Array of objects

const schools = [{name: "Oerlikon", year: 2026, location: "Oerlikon Strasse"}, 
                 {name: "Stadelhofen", year: 2023, location: "Stadelhofen Strasse"},
                 {name: "Zurich", year: 2025, location: "Stadt Zurich"},
                 {name: "Bern", year: 2024, location: "Stadt Bern"}];

console.log(schools[0].location);
console.log(schools[3].name);

schools.pop();
console.log(schools);

schools.unshift({name: "Wetzikon", year: 2025, location: "Zurich"});
console.log(schools);

/*removes objects between two positions
schools.splice(0, 1);*/

schools.forEach(school => console.log(school.name));

const schoolLocation = schools.map(school => school.location);
console.log(schoolLocation);

const oldSchools = schools.filter(school => school.year < 2026);
console.log(oldSchools);
