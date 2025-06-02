//Rock Paper Scissors Game

const options = ["rock", "paper", "scissor"];
const userDisplay = document.getElementById("userDisplay");
const pcDisplay = document.getElementById("pcDisplay");
const showDisplay = document.getElementById("showDisplay");
const userScoreShow = document.getElementById("userScoreShow");
const pcScoreShow = document.getElementById("pcScoreShow");
let userScore = 0;
let pcScore = 0;


function start(userInput){
    const pcInput = options[Math.floor(Math.random() * 3)];
    let result = "";

    if(userInput === pcInput){
        result = "It's a tie.";
    }
    else{
        switch(userInput){
            case "rock":
                result = (pcInput === "scissor") ? "You won!!" : "You lost";
                break;
            case "paper":
                result = (pcInput === "rock") ? "You won!!" : "You lost";
                break;
            case "scissor":
                result = (pcInput === "paper") ? "You won!!" : "You lost";
                break;
        }
    }
    userDisplay.textContent = `User: ${userInput}`;
    pcDisplay.textContent = `PC: ${pcInput}`;
    showDisplay.textContent = result;

    showDisplay.classList.remove("greenFont", "redFont");

    switch(result){
        case "You won!!":
            showDisplay.classList.add("greenFont");
            userScore++;
            userScoreShow.textContent = userScore;
            break;
        case "You lost":
            showDisplay.classList.add("redFont");
            pcScore++;
            pcScoreShow.textContent = pcScore;
            break;
    }
}