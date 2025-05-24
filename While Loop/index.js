//while loop
let ID;
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
