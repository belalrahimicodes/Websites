//Mouse events

const text = document.getElementById("text");
const button = document.getElementById("button");

//click event
button.addEventListener("click", changeItem => {
    changeItem.target.style.backgroundColor = "lightpink";
    text.style.backgroundColor = "black";
    text.style.color = "white";
    text.textContent = "Good job!";
});

//mouseover event
button.addEventListener("mouseover", changeItem =>{
    text.style.backgroundColor = "pink";
});

//mouseout event
button.addEventListener("mouseout", changeItem => {
    text.style.backgroundColor = "aqua";
    text.textContent = "Click the button below me ⬇️"; 
    text.style.color = "black";
});

//key events

const key = document.getElementById("key");

document.addEventListener("keydown", event => {
    key.style.color = "red";
    key.textContent = "magic";
});
document.addEventListener("keyup", event => {
    key.style.color = "black";
    key.textContent = "Press a key and see the magic!";
});

//Hide and show HTML

const hideButton = document.getElementById("hideButton");
const img = document.getElementById("img");

hideButton.addEventListener("click", event => {
    /*if you want the position of the image to be reserved once hidden, 
    you can use visibility option and make it either visible or hidden*/
    if(img.style.display === "none"){
        img.style.display = "inline";
        hideButton.textContent = "Hide Image";
    }
    else{
        img.style.display = "none";
        hideButton.textContent = "Show Image";
    }
});

//classList

const clButton = document.getElementById("classList");

//add a classList once clicked
clButton.addEventListener("click", event =>{
    event.target.classList.add("clickButton");
});
//toggle a classList once mouse is over the button
hideButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});
//toggle a classList once mouse is out of the button
hideButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("out");
});

const replaceButton = document.getElementById("replaceButton");

replaceButton.classList.add("out");
//replace classList/s
replaceButton.addEventListener("click", event =>{
    event.target.classList.replace("out", "disable");
    event.target.textContent = "Noice!";
});

const containsButton = document.getElementById("containsButton");

containsButton.classList.add("newStyle");
//replace classList if it already contains another classList
containsButton.addEventListener("click", event =>{
    if(event.target.classList.contains("disable")){
        event.target.textContent = "magic";
    }
    else{
        event.target.classList.replace("newStyle", "disable");
        event.target.textContent = "good job, click again now!";
    }
});