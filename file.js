// create functions for adding, multiplying
// dividing and subtracting

function sumNumbers(a, b) {
    return a + b;
};

function multiplyNumbers(a, b) {
    return a * b;
};

function divideNumbers(a, b) {
    if (b === 0) {
        return 'division by 0 is not allowed';
    } else {
        return a / b;
    }
}

function subtractNumbers(a, b) {
    return a - b;
}

//create a variable previous for first number, operator, 
//and  second number

let firstNum = '';
let operator = '';
let secondNum = '';
let displayValue = '0';


//new function that takes an operator and 2 numbers and calls one of the above functions

function operate(operator, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return sumNumbers(a, b);
        case '-':
            return subtractNumbers(a, b);
        case '*':
            return multiplyNumbers(a, b);
        case '/':
            return divideNumbers(a, b);
        default:
            return 'Invalid operator';
    }
}


//create a function to display a value when you click a 
//number buttons
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');



function updateDisplay(value) {
    display.textContent = value;
};

numbers.forEach(button =>{
    button.addEventListener('click', () => {
            const currentDisplayValue = display.textContent;
            const number = button.textContent;
            updateDisplay(currentDisplayValue === '0' ? number: currentDisplayValue +  number);
    })
});

operatorButtons.forEach(button => {
    button.addEventListener('click' ,() => {
        firstNum = display.textContent;
        operator = button.textContent;
        updateDisplay('');
    })
});

equalsButton.addEventListener('click', ()=>{
    secondNum = display.textContent;
    const result = operate(operator, firstNum, secondNum);
    updateDisplay(result);
});

clearButton.addEventListener('click', ()=>{
    firstNum = '';
    secondNum = '';
    operator = '';
    updateDisplay('0');
})

