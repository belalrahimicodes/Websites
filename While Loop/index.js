//while loop
/*let ID;
let password;
let isLoggedIn = false;

while(!isLoggedIn){
    ID = window.prompt("Enter your ID");
    password = window.prompt("Enter your password");
    
    if(ID === "myID" && password === "myPassword"){
        isLoggedIn = true;
        console.log("you are logged in");

    }
    else{
        console.log("either ID or password is invalid!");
    }
}
//do while; checking if the result of two numbers is even or odd
let x;
let y;
let result;

do{
    x = Number(window.prompt("Enter the value of X"));
    y = Number(window.prompt("Enter the value of Y"));
    result = x + y;
    
    if(isNaN(x) || isNaN(y)){
    window.alert("Please enter a valid number!");
    }
}
while(isNaN(x) || isNaN(y));

if(result % 2 === 0){
        console.log("The total of X and Y is an even number")
}
else{
        console.log("The totla of X and Y is an odd number");
}*/
//for loop
for(let i = 0; i <= 10; i++){
    console.log(i);
}
console.log("great job!");

for(let x = 10; x > 0; x--){
    console.log(x)
}
console.log("congrats!");

for(y = 0; y <=10; y++){
    if(y==6){
        continue;
    }
    else if(y == 7){
        break;
    }
    console.log(y);
}
console.log("6 is skipped and we stopped at 7");

