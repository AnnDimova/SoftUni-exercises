function rotation(arr, rotationCount) {
	for (let i = 0; i < rotationCount; i++) {
		let numberToMove = arr.shift();
        arr.push(numberToMove)
		
	}

	console.log(arr.join(' '));
}
rotation([ 51, 47, 32, 61, 21 ], 2);
