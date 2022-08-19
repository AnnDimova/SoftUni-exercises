function divisible(arr) {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			continue;
		}
		if (arr[i] % 3 === 0 || arr[i] % 5 === 0 || arr[i] % 7 === 0) {
			count++;
		}
	}

	return count;
}
console.log(divisible([ 1, 3, 15, 0, 9, 17, 14 ]));
