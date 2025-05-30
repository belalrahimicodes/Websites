//Stopwatch

let timer = null;
let startTime = 0;
let elapsedTime = 0;
const displayWatch = document.getElementById("content");
let isRunning = false;

function startWatch(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateWatch, 10);
        isRunning = true;
    }
}
function stopWatch(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function resetWatch(){
    clearInterval(timer);
    let startTime = 0;
    let elapsedTime = 0;
    isRunning = false;
    displayWatch.textContent = "00:00:00:00";
}
function updateWatch(){
    const now = Date.now();
    elapsedTime = now - startTime;

    //converting milliseconds to hours
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    //% cause we dont want 60 to be displayed
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    //divided by 10 cause we want only 2 digits to be displayed since it's normally 4 digits
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = hours.toString().padStart(2, 0);
    minutes = minutes.toString().padStart(2, 0);
    seconds = seconds.toString().padStart(2, 0);
    milliseconds = milliseconds.toString().padStart(2, 0);

    displayWatch.textContent = `${hours}: ${minutes}:${seconds}:${milliseconds}`;
}