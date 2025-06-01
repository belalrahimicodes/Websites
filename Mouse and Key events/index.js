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