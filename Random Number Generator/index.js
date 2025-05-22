//generating a random number between 1 and 10

const btn = document.getElementById("btn");
const label = document.getElementById("label")

let min = 1;
let max = 10;

//let randomNumber = Math.floor(Math.random() * 10) + 1;

let randomNumber;

btn.onclick = function(){
    randomNumber = Math.floor(Math.random() * max ) + min
    label.textContent = randomNumber;
}