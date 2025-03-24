const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons button");

let currentNumber = "";
let firstOperand = null;
let operator = null;
let restart = false;

function update_result(originClear = false) {
    result.innerText = originClear ? 0 : currentNumber.replace(".", ",");
}

function addDigit(digit) {
    if(digit === "," && (currentNumber.includes(",") || !currentNumber))
        return;

    if (restart) {
        currentNumber = digit;
        restart = false;
    } else {
        currentNumber += digit;
    }

    update_result();
}

function setOperator(newOperator) {
    if (currentNumber) {
        firstOperand = parseFloat(currentNumber.replace(",", ".");
    currentNumber = "";
    }

    operator = newOperator;
}

function calculate() {
    if(operator === null || firstOperand === null) return;
    let secondOperand = parseFloat(currentNumber.replace(",", "."));
    let resultValue;
}

switch(operator) {
    case "+":
        resultValue = firstOperand + secondOperand;
        break;
    case "-":
        resultValue = firstOperand - secondOperand;
        break;
    case "X":
        resultValue = firstOperand * secondOperand;
        break;
    case "÷":
        resultValue = firstOperand / secondOperand;
        break;
    default:
        return;
    
}

if(resultValue.toString().split(".")[1]?.lenght > 5) {
    currentNumber = parseFloat(resultValue.toFixed(5)).toString();
} else {
    currentNumber = resultValue.toString();

operator = null;
firstOperand = null;
restart = true;
percentageValue = null;
update_result()
}

function clearCalculator() {
    currentNumber = "";
    firstOperand = null;
    operator = null;
    update_result(true);
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
const buttonText = button.innerText;
if (/^[0-9,]+$/.test(buttonText)) {
    addDigit(buttonText);
} else if(["+", "-", "X", "÷"].includes(buttonText)) {
    setOperator(buttonText);
} else if (buttonText === "=") {
    calculate();
}
    });
});