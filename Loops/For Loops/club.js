function club(input) {
	let target = Number(input[0]);
	let inputL = input.length;

	let income = 0;

	for (let i = 1; i < inputL; i++) {
		let coctailName = input[i++];
		if (coctailName === 'Party!') {
			break;
		}
		let count = Number(input[i]);
		let price = Number(coctailName.length);

		income += count * price;
		let percent = count * price;

		if (percent % 2 !== 0) {
			income *= 0.75;
		}
	}

	if (income >= target) {
		console.log(`Target acquired.`);
		console.log(`Club income - ${income.toFixed(2)} leva.`);
	} else {
		console.log(`We need ${(target - income).toFixed(2)} leva more.`);
		console.log(`Club income - ${income.toFixed(2)} leva.`);
	}
}
club([ '500', 'Bellini', '6', 'Bamboo', '7', 'Party!' ]);
console.log(`--`);
club([ '100', 'Sidecar', '7', 'Mojito', '5', 'White Russian', '10' ]);
