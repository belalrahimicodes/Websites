//Random Password Generator

function passGenerator(length, hasLowercase, hasNumbers, hasUppercase, hasSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "+*%&/?";

    let allowedChars = "";
    let password = "";

    allowedChars += hasLowercase ? lowercaseChars : "";
    allowedChars += hasUppercase ? uppercaseChars : "";
    allowedChars += hasNumbers ? numberChars : "";
    allowedChars += hasSymbols ? symbolChars : "";

   if(length <= 0){
    return `Password length has to be at least 1`;
    }
    if(allowedChars.length === 0){
        return `Atleast one set of character needs to be selected`;
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passLength = 8;
const hasLowercase = true;
const hasNumbers = true;
const hasUppercase = true;
const hasSymbols = true;

const password = passGenerator(passLength, hasLowercase, hasNumbers, hasUppercase, hasSymbols);

console.log(`Generated Random Password: ${password}`);