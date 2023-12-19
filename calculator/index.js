const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    if (b === 0) {
        alert("DUH! You can't divide by 0!");
    }
    else {
        return a / b;
    }
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const percentage = function(a, b) {
    return (a / 100) * b;
};

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


