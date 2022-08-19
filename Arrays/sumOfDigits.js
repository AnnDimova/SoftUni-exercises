function solve() {
	function addDigits(num, sum) {
		if (num) {
			return addDigits(Math.floor(num / 10), sum + num % 10);
		}
		return sum;
	}

	function sortByDigitSum(array) {
		let arr = [];
		arr.sort((a, b) => {
			return addDigits(b) - addDigits(a);
		});
		return arr;
	}

	console.log(sortByDigitSum(26, 31, 7, 47, 123, 55));
}

solve();
