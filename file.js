// create functions for adding, multiplying
// dividing and subtracting

function sumNumbers(a,b){
    return a + b;
};

function multiplyNumbers(a,b){
    return a * b;
};

function divideNumbers(a,b){
   if(b === 0){
    return 'division by 0 is not allowed';
   }else{
    return a / b;
   }
}

function subtractNumbers(a,b){
    return a - b;
}

//create a variable for first number, operator, 
//and  second number

let firstNum = '';
let operator = '';
let secondNum = '';


//new function that takes an operator and 2 numbers and calls one of the above functions

function operate(operator, a,b){
  switch(operator){
    case '+':
        return sumNumbers(a,b);
    case '-':
        return subtractNumbers(a,b);
    case '*':
        return multiplyNumbers(a,b);
    case '/':
        return divideNumbers(a,b);
    default:
            return 'Invalid operator';
  }
}