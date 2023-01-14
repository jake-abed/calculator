'use strict';

//declare DOM Buttons & Screen
const calcScreen = document.querySelector('.screen-text'),
	numberButtons = document.querySelectorAll('.number'),
	clearButton = document.querySelector('.clear.button'),
	signButton = document.querySelector('.sign'),
	operatorButtons = document.querySelectorAll('.operator'),
	pointButton = document.querySelector('.point'),
	equalButton = document.querySelector('.equal');

//Initialize global object
const calculator = {
	currentOperand: null,
	lastOperand: null,
	operator: null,
	result: null,
	displayValue: ''
}

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

//helper function to update the display with new value
const addToDisplay = (newDisplayValue) => {
	calculator.displayValue += newDisplayValue;
	return calcScreen.innerText = calculator.displayValue;
}

//Helper function to clear display
const clearDisplay = () => {
	calculator.displayValue = '';
	return calcScreen.innerText = '';
}

//Update display on button press

numberButtons.forEach(button => {
	button.addEventListener('click', () => addToDisplay(button.dataset.val));
})
