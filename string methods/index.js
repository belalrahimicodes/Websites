//string methods

let player = "Alex is a doctor";

console.log(player.charAt(0));
console.log(player.indexOf("A"));
console.log(player.lastIndexOf("o"));
console.log(player.length);

let teacher = "   Mr. Alex";
console.log(teacher.trim());
console.log(teacher.toUpperCase());
console.log(teacher.toLocaleLowerCase());
console.log(teacher.repeat(2));


let teacherName = teacher.startsWith(" ");
//checking if the username begins with a space 
if(teacherName){
    console.log("your name cant start with a space")
}
else{
    console.log(teacherName);
}

let lastName = "Gerber "
let teacherLastName = lastName.endsWith("");
//checking if the last name ends with a space 
if(teacherLastName){
    console.log("last name cant end with a space");
}
else{
    console.log(teacherLastName);
}

let fun = "playing guitar";
let hobby = fun.includes(" ");
if(hobby){
    console.log("your hobby cant include a space");
}
//replace 
let phoneNumber = "293-84932-29347-1023";
phoneNumber = phoneNumber.replaceAll("-", " ");
console.log(phoneNumber);

let creditCard = "237489237"
creditCard = creditCard.padStart(20, "0");
creditCard = creditCard.padEnd(23, "1");
console.log(creditCard);

fun = fun.slice(0, 3);
console.log(fun);

let app = "azure active";
app = app.slice(1, 6);
console.log(app);

let list = "cars apples wash go come";
let shortList = list.slice(0, list.indexOf(" "));
console.log(shortList);

