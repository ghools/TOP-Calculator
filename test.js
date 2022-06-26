function add (num1, num2) {
    let result = Number(num1) + Number(num2);
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
    if(operator == "+" ){
        add();
    }
    if(operator == "-"){
        subtract(num1, num2);
    }
    if(operator == "*"){
        multiply(num1, num2);
    }
    if(operator == "/"){
        divide(num1, num2);
    }
}
operate("12", "32","+")