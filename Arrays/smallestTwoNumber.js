function smallestNums(array) {
	array = array.sort((a, b) => a - b);
	let newArr = array.slice(0, 2);

	console.log(newArr.join(' '));
}
smallestNums([ 30, 15, 50, 5 ]);
smallestNums([ 3, 0, 10, 4, 7, 3 ]);
