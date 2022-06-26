let curNum = null;
let storeNum = null;
let displayValue = curNum;


function add (storeNum, curNum) {
    let result = Number(storeNum) + Number(curNum);
    return result;
}

function subtract (storeNum, curNum) {
    let result = storeNum -curNum;
    return result;
}

function multiply (storeNum, curNum) {
    let result = storeNum * curNum; 
    return result;
}

function divide (storeNum, curNum) {
    let result = storeNum / curNum;
    return result;
}

function operate (storeNum, curNum, operator) {
    result = null;
    if(operator == "+" ){
        result = add(storeNum, curNum);
        return result;
    }
    if(operator == "-"){
        result = subtract(storeNum, curNum);
        return result;
    }
    if(operator == "*"){
        result = multiply(storeNum, curNum);
        return result;
    }
    if(operator == "/"){
        result = divide(storeNum, curNum);
        return result;
    }

}

//results display box stuff
const resultsBox = document.querySelector("#container .results")
const displayResult = document.createElement("div");
displayResult.innerHTML = displayValue;
displayResult.style.fontSize = "larger";
displayResult.style.fontWeight = "bolder";
resultsBox.appendChild(displayResult);

function updateDisplay(){
    displayResult.innerHTML=displayValue;
    resultsBox.appendChild(displayResult);
}

//buttons stuff
function btn1(){
    if(curNum == null) {
     curNum = "1";
     displayValue = curNum;
     updateDisplay(displayValue);
     return curNum;   
    }
    curNum = curNum + "1";
    displayValue = curNum;
    updateDisplay();
}
function btn2(){
    if(curNum == null) {
     curNum = "2";
     displayValue = curNum;
     updateDisplay(displayValue);
     return curNum;
    }
    curNum = curNum + "2";
    displayValue = curNum;
    updateDisplay(displayValue);
}
function btn3(){
    if(curNum == null) {
     curNum = "3";
     displayValue = curNum;
     updateDisplay(displayValue);
     return curNum;
    }
    curNum = curNum + "3";
    displayValue = curNum;
    updateDisplay(displayValue);
}
function btn4(){
    if(curNum == null) {
     curNum = "4";
     displayValue = curNum;
     updateDisplay(displayValue);
     return curNum;
    }
    curNum = curNum + "4";
    displayValue = curNum;
    updateDisplay(displayValue);
}
function btn5(){
    if(curNum == null) {
     curNum = "5";
     displayValue = curNum;
     updateDisplay(displayValue);
     return curNum;
    }
    curNum = curNum + "5";
    displayValue = curNum;
    updateDisplay(displayValue);
}
function btn6(){
    if(curNum == null) {
     curNum = "6";
     displayValue = curNum;
     updateDisplay(displayValue);
     return curNum;
    }
    curNum = curNum + "6";
    displayValue = curNum;
    updateDisplay(displayValue);
}
function btn7(){
    if(curNum == null) {
     curNum = "7";
     displayValue = curNum;
     updateDisplay(displayValue);
     return curNum;
    }
    curNum = curNum + "7";
    displayValue = curNum;
    updateDisplay(displayValue);
}
function btn8(){
    if(curNum == null) {
     curNum = "8";
     displayValue = curNum;
     updateDisplay(displayValue);
     return curNum;
    }
    curNum = curNum + "8";
    displayValue = curNum;
    updateDisplay(displayValue);
}
function btn9(){
    if(curNum == null) {
     curNum = "9";
     displayValue = curNum;
     updateDisplay(displayValue);
     return curNum;
    }
    curNum = curNum + "9";
    displayValue = curNum;
    updateDisplay(displayValue);
}
function btn0(){
    if(curNum == null) {
     curNum = "0";
     displayValue = curNum;
     updateDisplay(displayValue);
     return curNum;
    }
    curNum = curNum + "0";
    displayValue = curNum;
    updateDisplay(displayValue);
}
function clearBtn(){
       curNum = null;
       storeNum = null;
       displayValue = curNum;
       updateDisplay(displayValue);
}
function addBtn() {
    storeNum = curNum;
    curNum = null;
    operator = "+"
    displayValue = curNum;
    updateDisplay(displayValue);
}
function subBtn() {
    storeNum = curNum;
    curNum = null;
    operator = "-"
    displayValue = curNum;
    updateDisplay(displayValue);
}
function multBtn() {
    storeNum = curNum;
    curNum = null;
    operator = "*"
    displayValue = curNum;
    updateDisplay(displayValue);
}
function divBtn() {
    storeNum = curNum;
    curNum = null;
    operator = "/"
    displayValue = curNum;
    updateDisplay(displayValue);
}


function equalsBtn() {
    curNum = operate(storeNum, curNum, operator);
    displayValue = curNum;
    console.log(result)
    updateDisplay(displayValue);
    return result;
}