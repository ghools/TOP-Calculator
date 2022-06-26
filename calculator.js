let result = 0;


function add (a, b) {
    let result = a + b;
    return result;
}

function subtract (a, b) {
    let result = a -b;
    return result;
}

function multiply (a, b) {
    let result = a * b; 
    return result;
}

function divide (a, b) {
    let result = a / b;
    return result;
}

function operate (num1, num2, operator) {
    if(operator = +){
        add(num1, num2);
    }
    if(operator = -){
        subtract(num1, num2);
    }
    if(operator = *){
        multiply(num1, num2);
    }
    if(operator = /){
        divide(num1, num2);
    }
}

const resultsBox = document.getElementsByClassName("results");
resultsBox.write(result); //WIP. might need to add a new div inside the box. Writing the "result" var here, and eventually updating it.
