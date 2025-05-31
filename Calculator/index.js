//calculator

const input = document.getElementById("input");

/*adding the value given by the user to the value that we already have
which is our input*/
function addToDisplay(insert){
    /*our default value here is zero, we want this to disappear once
    the user gives a new value*/
    if(input.value === "0"){
        input.value = insert; 
    }
    else{
    input.value += insert;
    }
}
function calculate(){
    try{
        //eval in this code below evaluates the input value that has been given
        input.value = eval(input.value);       
    }
    //catching the error and assigning it to the input value
    catch(error){
        input.value = "Error";
    }
}
//clearing the input value to 0
function clearInput(){
    input.value = 0;
}
