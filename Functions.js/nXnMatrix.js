function matrix(input) {
	let number = input;
	let output = '';

	function rowPrint(num) {
		for (let i = 1; i <= num; i++) {
			output += `${number} `;
		}
		return output;
	}

	for (let i = 1; i <= number; i++) {
		console.log(rowPrint(number));
	}
}
matrix(3);
matrix(7);
matrix(2);
