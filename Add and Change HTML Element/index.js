//Add and Change HTML Elements

//create
const newItem = document.createElement("li");

//properties
newItem.textContent = "mercedes";
newItem.id = "mercedes";
newItem.style.color = "red";
//append - we could also use prepend to bring the item at the top
document.getElementById("cars").append(newItem);

//EX2
const newH1 = document.createElement("h1");
newH1.style.backgroundColor = "yellow";
newH1.style.textAlign = "center";
newH1.style.fontSize = "33px";

newH1.textContent = "new element";

document.body.prepend(newH1);

//EX3 
const newElement = document.createElement("li");

newElement.textContent = "grape";
newElement.backgroundColor = "pink";
newElement.id = "grape";

const olFruits = document.getElementById("fruits");
document.body.insertBefore(newElement, olFruits);

// EX4

const myH2 = document.createElement("h2");

myH2.textContent = "Food";
myH2.id = "myH2";
myH2.style.backgroundColor = "green";

const ols = document.querySelectorAll(".ol");

document.body.insertBefore(myH2, ols[2]);

//EX5 Remove an element

const newFood = document.createElement("li");
newFood.textContent = "potato";
newFood.style.color = "red";
document.getElementById("food").append(newFood);

document.getElementById("food").removeChild(newFood);
