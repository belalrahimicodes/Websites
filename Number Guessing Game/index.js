//Number Guessing Game
let min = 1;
let max = 10;
let attemps = 0;
let guess;
let answer = Math.floor(Math.random() * (max - min + 1)) + min;
let running = true;

while(running){
    guess = Number(window.prompt(`Enter a number between ${min} and ${max}`));

    if(isNaN(guess)){
        alert("Please give a valid number!");
    }
    else{
        attemps++;
    if(guess < answer){
        alert("Too low");
    }
    else if(guess > answer){
        alert("Too high");
    }
    else{
        alert(`Good job, you got it right! It's ${answer}. You tried ${attemps} times.`);
        running = false;
    }
    }
}