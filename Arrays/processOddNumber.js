function oddNumbers(array) {
	let newArr = [];
	for (let i = 0; i < array.length; i++) {
		if (i % 2 !== 0) {
			newArr.push(array[i] * 2);
		}
	}

	newArr.reverse();

	console.log(newArr.join(' '));
}
oddNumbers([ 10, 15, 20, 25 ]);
oddNumbers([ 3, 0, 10, 4, 7, 3 ]);
