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