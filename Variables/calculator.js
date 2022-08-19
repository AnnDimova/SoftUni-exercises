function calculator(firstNumber, oper, secondNumber) {
	let firstNum = firstNumber;
	let secondNum = secondNumber;
	let operator = oper;
	let result = 0;

	switch (operator) {
		case '+':
			result = firstNum + secondNum;
			break;
		case '-':
			result = firstNum - secondNum;
			break;
		case '*':
			result = firstNum * secondNum;
			break;
		case '/':
			result = firstNum / secondNum;
			break;
	}

	console.log(result.toFixed(2));
}
calculator(5, '+', 10);
calculator(25.5, '-', 3);
