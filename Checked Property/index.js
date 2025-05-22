//checked property

const apple = document.getElementById("apple");
const orange = document.getElementById("orange");
const banana = document.getElementById("banana");
const btn = document.getElementById("btn");
const mySpan = document.getElementById("mySpan");

btn.onclick = function(){
    if(apple.checked){
        mySpan.textContent = "You have selected an apple";
    }
    else if(orange.checked){
        mySpan.textContent = "You have selected an orange";
    }
    else if(banana.checked){
        mySpan.textContent = "You have selected a banana";      
    }
    else{
        mySpan.textContent = "Please select a fruit!";
    }
}