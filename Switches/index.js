//Switches, checking the GPA of students with Switches

const input = document.getElementById("input");
const span = document.getElementById("span");
const btn = document.getElementById("btn");

btn.onclick = function(){
       const gpa = Number(input.value);
       //in case the input is empty
       if(input.value.trim() === ""){
        span.textContent = "Please type a correct GPA";
        return;
       }
switch(true){
    case (gpa < 1.5):
        span.textContent = "You need to study more!";
        break;
    case (gpa >= 1.5 && gpa < 2):
        span.textContent = "You have a passing GPA!";
        break;
    case (gpa >= 2 && gpa < 3):
        span.textContent = "You have a very good GPA";
        break;
    case (gpa >= 3 && gpa <= 4):
        span.textContent = "You are great";
        break;
    default:
        span.textContent = "Please type a correct GPA";
}
}