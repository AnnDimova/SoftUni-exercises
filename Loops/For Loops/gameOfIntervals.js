function gameOfIntervals(input) {
	let moves = Number(input[0]);
	let inputL = input.length;

	let points = 0;
	let counter1 = 0;
	let counter2 = 0;
	let counter3 = 0;
	let counter4 = 0;
	let counter5 = 0;
	let counter6 = 0;

	for (let i = 1; i < inputL; i++) {
		let num = Number(input[i]);

		if (num >= 0 && num <= 50) {
			if (num < 10) {
				points += 0.2 * num;
				counter1++;
			} else if (num < 20) {
				points += 0.3 * num;
				counter2++;
			} else if (num < 30) {
				points += 0.4 * num;
				counter3++;
			} else if (num < 40) {
				points += 50;
				counter4++;
			} else if (num <= 50) {
				points += 100;
				counter5++;
			}
		} else if (num < 0 || num > 50) {
			points /= 2;
			counter6++;
		}
	}

	console.log(`${points.toFixed(2)}`);
	console.log(`From 0 to 9: ${(counter1 / moves * 100).toFixed(2)}%`);
	console.log(`From 10 to 19: ${(counter2 / moves * 100).toFixed(2)}%`);
	console.log(`From 20 to 29: ${(counter3 / moves * 100).toFixed(2)}%`);
	console.log(`From 30 to 39: ${(counter4 / moves * 100).toFixed(2)}%`);
	console.log(`From 40 to 50: ${(counter5 / moves * 100).toFixed(2)}%`);
	console.log(`Invalid numbers: ${(counter6 / moves * 100).toFixed(2)}%`);
}
gameOfIntervals([ '10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20' ]);
