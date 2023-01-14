'use strict';

//Initialize global object
const calculator = {
    currentOperand: null,
    lastOperand: null,
    operator: null,
    result: null,
    displayValue: null
}

//Begin further planning

//Basic math functions for add, subtract, multiply, divide.

const add = (x, y) => Number(x) + Number(y);
const subtract = (x, y) => Number(x) - Number(y);
const multiply = (x, y) => Number(x) * Number(y);
const divide = (x, y) => Number(x) / Number(y);

//Operate takes operator and two values and runs the equation.
const operate = (operator, x, y) => {
    switch (operator) {
        case '+':
            return add(x, y);
            break;
        case '-':
            return subtract(x, y);
            break;
        case '*':
            return multiply(x, y);
            break;
        case '/':
            return divide(x, y);
            break;
    }
}

//Update display on button press