//Date object

const date = new Date();
console.log(date);

const year = date.getFullYear();
console.log(year);

const month = date.getMonth();
console.log(month);

const day = date.getDay();
console.log(day);

const hour = date.getHours();
console.log(hour);

const minutes = date.getMinutes();
console.log(minutes);

date.setFullYear(2026);
date.setDate(1);
date.setHours(6);
date.setMinutes(23);
console.log(date);

const date1 = new Date("2022-01-22");
const date2 = new Date("2025-02-02");

if(date1 < date2){
    console.log("2025 is greater than 2022");
}

//Closure: function in a function
console.log("Example 1");

function outer(){

    let text = "Hi";

    function inner(){
        console.log(text);
    }

    inner();
}

outer();

//ex2
console.log("Example 2");

function numbers(){
    let number = 0;

    function increase(){
        number++;
    }
    function decrease(){
        number--;
    }
    function reset(){
        number = 0;
    }
    function displayNum(){
        return number;
    }
    return {increase, decrease, reset, displayNum};

}
const counter = numbers();

console.log(counter.displayNum());

counter.increase();
console.log(counter.displayNum());

counter.increase();
console.log(counter.displayNum());

counter.reset();
console.log(counter.displayNum());

//ex3
console.log("Example 3");

function balance(){
    let money = 0;

    function getMoney(givenMoney){
        money += givenMoney;
    }
    function giveMoney(givenMoney){
        money -= givenMoney;
    }
    function resetBalance(){
        money = 0;
    }
    function displayMoney(){
        return money;
    }

    return {getMoney, giveMoney, resetBalance, displayMoney};
}

const bankAccount = balance();

bankAccount.getMoney(7);
console.log(bankAccount.displayMoney());

bankAccount.giveMoney(4);
console.log(bankAccount.displayMoney());

bankAccount.resetBalance();
console.log(bankAccount.displayMoney());