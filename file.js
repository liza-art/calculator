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