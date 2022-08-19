function calculateOddEvenSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 5 === 0) {
			continue;
		}
		if (arr[i] % 2 === 0) {
			sum -= arr[i];
		} else {
			sum += arr[i];
		}
	}

	return sum;
}
console.log(calculateOddEvenSum([ 1, 2, 3, 4, 5 ]));
