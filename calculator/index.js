// Default Settings:
    let firstOperand = '';
    let secondOperand = '';
    let currentOperator = null; 
    let reset = false;


// Consts:
    const operandBtns = document.querySelectorAll("[data-number]");
    const operatorBtns = document.querySelectorAll("[data-operator]");
    const decimalBtn = document.querySelector("#decimal");
    const equalsBtn = document.querySelector("#equals");
    const backspaceBtn = document.querySelector("#backspace-btn");
    const clearBtn = document.querySelector("#clear-btn");
    const input = document.querySelector("#input");
    const output = document.querySelector("#output");


// Event Listeners:
    window.addEventListener('keydown', keyConvert)
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



// Operand and operator functions:

    // Operator functions
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

    
    // Calculation functions
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


// Input and Output:
    function operand(number) {
        if (output.textContent === '0' || reset) 
            resetScreen()
        output.textContent += number;
    }

    function keyConvert(e) {
        if (e.key >= 0 && e.key <= 9) operand(e.key);
        if (e.key === '.') decimal();
        if (e.key === '=' || e.key === 'Enter') evaluate();
        if (e.key === 'Backspace') backspace();
        if (e.key === 'Escape') clear();
        if (e.key === '+' || e.key === "-" || e.key === '*' || e.key === '/' || e.key === '%') setOperation(convertOperator(e.key));
    }

    function convertOperator(keyboardOperator) {
        if (keyboardOperator === '+') return '+';
        if (keyboardOperator === '-') return '−';
        if (keyboardOperator === '/') return '÷';
        if (keyboardOperator === '*') return '×';
        if (keyboardOperator === '%') return '٪';
    }


// Misc functions:
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

    function roundResult(number) {
        return Math.round(number * 1000) / 1000
    }