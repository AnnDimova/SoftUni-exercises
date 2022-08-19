function sumOfDigits(num) {
    let number = num.toString()
	let sum = 0;

	for (let i = 0; i < number.length; i++) {
        let n = Number(number[i]);
		sum += n;
	}

	console.log(sum);
}
sumOfDigits(245678);
sumOfDigits(97561);
sumOfDigits(543);
