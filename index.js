console.log("Hello dear");

document.getElementById("h1").textContent = "nice";
document.getElementById("p").textContent = "great";

//window.alert("welcome to my website");

let vorname = "Belal";
let age = 24;
let country = "";
let isGamer = true;

let programs = 5;

//programs += 1;
//programs -= 1;
//programs *= 2;
//programs /= 2;
//programs %= 2;
programs **= 2;

programs++;

console.log(`My name is: ${vorname}`);
console.log(`My age is: ${age}`);
console.log(`Im from ${country}`);
console.log(typeof country);
console.log(`Im a gamer: ${isGamer}`);

document.getElementById("h2").textContent = `Ich bin ${vorname}`;
document.getElementById("p1").textContent = `Ich bin ${age} jahre alt`;
document.getElementById("p2").textContent = `Ich komme aus Afg ${country}`;
document.getElementById("p3").textContent = `Bin ich ein gamer? ${isGamer}`;

console.log(programs);

let playerName;

document.getElementById("btn").onclick = function(){
    playerName = document.getElementById("input").value;
    document.getElementById("h1").textContent = `Welcome ${playerName}`;
}