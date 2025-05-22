//counter
let count = 0;
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const label = document.getElementById("countLabel");

increaseBtn.onclick = function(){
count++;
label.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    label.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    label.textContent = count;
}
