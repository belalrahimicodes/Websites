//Dice Roller Game
function diceNumber(){

const input = document.getElementById("input").value;
const output = document.getElementById("output");
const imageDiv = document.getElementById("images");
const numbers = [];
const images = [];

    for(let i = 0; i < input; i++){
        const num = Math.floor(Math.random() * 6) + 1;
        numbers.push(num);
        images.push(`<img src="images/${num}.png" alt="dice number ${num}">`)
    }

output.textContent = `Dice: ${numbers.join(" - ")}`;
imageDiv.innerHTML = images.join(``);
}
