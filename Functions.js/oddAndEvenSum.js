function oddAndEven(number) {
	let numToString = number.toString();
	let oddCounter = 0;
	let evenCounter = 0;

	for (let i = 0; i < numToString.length; i++) {
		let currentNumber = Number(numToString[i]);

		if (currentNumber % 2 == 0) {
			evenCounter += currentNumber ;
		} else {
			oddCounter += currentNumber;
		}
	}

	return `Odd sum = ${oddCounter}, Even sum = ${evenCounter}`;
}
console.log(oddAndEven(1000435));
console.log(`---`);
console.log(oddAndEven(3495892137259234));
