//Element selector and DOM navigation

const element = document.getElementById("transportation");

const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "pink";

/*
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "lightblue";
*/

const newElements = document.querySelectorAll("ul");

newElements.forEach(newElement => {
    const lastChild = newElement.lastElementChild;
    lastChild.style.backgroundColor = "lightblue";
});

//There is also nextElementSibling, previousElementSibling

const elements2 = document.getElementById("fruits");

    const nextSibling = elements2.nextElementSibling;
    nextSibling.style.backgroundColor = "lightyellow"; 

   

//there is also parentElement and children

const element2 = document.getElementById("transportation");
const childrenS = element2.children;

//we need to type cast the children here into an array since it gives us a html collection 
Array.from(childrenS).forEach(child => {
    child.style.fontWeight = "bold";
});


childrenS[1].style.backgroundColor = "orange";
