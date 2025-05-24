//Temperature Conversion

const input = document.getElementById("tempInput");
const CelsiusRadio = document.getElementById("CelsiusRadio");
const FahrenheitRadio = document.getElementById("FahrenheitRadio");
const text = document.getElementById("text");
let temperature;

function changeTemperature(){
    
    if(CelsiusRadio.checked){
        temperature = Number(input.value);
        temperature = (temperature * 9 / 5) + 32;
        text.textContent = `${input.value} Celsius is ${temperature} Fahrenheit`;
    }
    else if(FahrenheitRadio.checked){
        temperature = Number(input.value);
        temperature = (5/9) * (temperature - 32);
        text.textContent = `${input.value} Fahrenheit is ${temperature} Celsius `;
    }
    else{
        text.textContent = "Please choose an option!";
    }
}