let firstOperand = '';
let secondOperand = '';
let currentOperator = null; 
let reset = false;

const operandBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const decimalBtn = document.querySelector("#decimal");
const equalsBtn = document.querySelector("#equals");
const backspaceBtn = document.querySelector("#backspace-btn");
const clearBtn = document.querySelector("#clear-btn");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

clearBtn.addEventListener('click', clear);
backspaceBtn.addEventListener('click', backspace);
decimalBtn.addEventListener('click', decimal);
equalsBtn.addEventListener('click', evaluate)

operandBtns.forEach((button) =>
    button.addEventListener('click', () => operand(button.textContent))
)
operatorBtns.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)

function operand(number) {
    if (output.textContent === '0' || reset) 
        resetScreen()
    output.textContent += number;
}

function resetScreen() {
    output.textContent = '';
    reset = false;
}

function clear() {
    output.textContent = '0';
    input.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
  }

function backspace() {
    output.textContent = output.textContent.toString().slice(0, -1);
}

function decimal() {
    if (reset) resetScreen();
    if (output.textContent === '') 
        output.textContent = '0';
    if (output.textContent.includes('.')) return
        output.textContent += '.'; 
}

function setOperation(operator) {
    if (currentOperator !== null) evaluate()
    firstOperand = output.textContent
    currentOperator = operator
    input.textContent = `${firstOperand} ${currentOperator}`
    reset = true
}

function evaluate() {
    if (currentOperator === null || reset) return
    else {
        secondOperand = output.textContent;
        output.textContent = roundResult(operate(currentOperator, firstOperand, secondOperand));
        input.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`;
        currentOperator = null;
    }
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function add(a, b) {
	return a + b;
};

function subtract(a, b) {
	return a - b;
};

function divide(a, b) {
    if (b === 0) {
        alert("DUH! You can't divide by 0!");
    }
    else {
        return a / b;
    }
};

function multiply(a, b) {
    return a * b;
};

function percentage(a, b) {
    return (a / 100) * b;
};

function power(a, b) {
	return Math.pow(a, b);
};

function operate(operator, a, b) {

    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            return add(a, b)
        case '−':
            return subtract(a, b)
        case '÷':
            return divide(a, b)
        case '×':
            return multiply(a, b)
        case '٪':
            return percentage(a, b)
        case 'xⁿ':
            return power(a, b)
        default:
            return null;
    }
}



/* const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '/'
    if (keyboardOperator === '*') return 'x'
    if (keyboardOperator === '-') return '-'
    if (keyboardOperator === '+') return '+'
    if (keyboardOperator === '%') return '+'
  }

const operate = function(a, operator, b){
    a = Number(a);
    b = Number(b);
    switch(operator){
        case operator === add || operator === '+':
            return add(a, b);
            break;
        case operator === subtract || operator === '-':
            return subtract(a, b);
            break;
        case operator === multiply || operator === 'x':
            return multiply(a, b);
            break;
        case operator === divide || operator === '/':
            return divide(a, b);
            break;
    }
} */


