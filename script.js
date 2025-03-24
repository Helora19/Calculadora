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

buttons.forEach((button) => {
    button.addEventListener("click", () => {
const buttonText = button.innerText;
if (/^[0-9,]+$/.test(buttonText)) {
    addDigit(buttonText);
}
    });
});