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

//Update display and calculator.currentOperand on num button press
numberButtons.forEach(button => {
	button.addEventListener('pointerdown', () => {
		if (!!calculator.operator &&
			!!calculator.currentOperand &&
			!calculator.lastOperand) {
			calculator.lastOperand = calculator.currentOperand;
			clearDisplay();
			addToDisplay(button.dataset.val);
			calculator.currentOperand = calculator.displayValue;
		} else if (!!calculator.operator &&
			!calculator.currentOperand &&
			!!calculator.lastOperand) {
			clearDisplay();
			addToDisplay(button.dataset.val);
			calculator.currentOperand = calculator.displayValue;
		}
		else {
			addToDisplay(button.dataset.val);
			calculator.currentOperand = calculator.displayValue;
		}
	});
})

//Helper function to check if a string ends with an operator sign.
const endsWithOperator = (calcString) => {
	const finalChar = calcString[calcString.length - 1];
	if (finalChar === '+' ||
		finalChar === '-' ||
		finalChar === '/' ||
		finalChar === '*') return true
		else return false;
}

operatorButtons.forEach(button => {
	button.addEventListener('pointerdown', () => {
		let displayVal = calculator.displayValue;
		console.log(displayVal);
		if (endsWithOperator(displayVal)) {
			calculator.operator = button.dataset.val;
			displayVal = displayVal.replace(displayVal[displayVal.length - 1],
				calculator.operator)
			clearDisplay();
			return addToDisplay(displayVal);
		} else if (!!calculator.lastOperand) {
			calculator.operator = button.dataset.val;
			let result = operate(calculator.operator,
				calculator.lastOperand,
				calculator.currentOperand);
			calculator.lastOperand = result;
			calculator.currentOperand = null;
			clearDisplay();
			addToDisplay(calculator.lastOperand);
		}
		else {
			calculator.operator = button.dataset.val;
			displayVal += calculator.operator;
			return addToDisplay(calculator.operator);
		}
	})
})

const clearCalculator = () => {
	calculator.currentOperand = null;
	calculator.lastOperand = null;
	calculator.displayValue = '';
	calculator.operator = null;
	clearDisplay();
	return console.log('Calculator cleared!')
}

clearButton.addEventListener('pointerdown', clearCalculator);