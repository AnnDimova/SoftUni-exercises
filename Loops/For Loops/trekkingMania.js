function trekkingMania(input) {
	
	let numGroups = Number(input[0]);
	let totalClimbers = 0;
	let musalaCounter = 0;
	let monblanCounter = 0;
	let kilimanjaroCounter = 0;
	let k2Counter = 0;
	let everestCounter = 0;

	for (let i = 1; i < input.length; i++) {
		let num = Number(input[i]);
		if (num <= 5) {
			musalaCounter += num;
		} else if (num >= 6 && num <= 12) {
			monblanCounter += num;
		} else if (num >= 13 && num <= 25) {
			kilimanjaroCounter += num;
		} else if (num >= 26 && num <= 40) {
			k2Counter += num;
		} else if (num >= 41) {
			everestCounter += num;
		}

		totalClimbers += num;
	}

	console.log(`${(musalaCounter / totalClimbers * 100).toFixed(2)}%`);
	console.log(`${(monblanCounter / totalClimbers * 100).toFixed(2)}%`);
	console.log(`${(kilimanjaroCounter / totalClimbers * 100).toFixed(2)}%`);
	console.log(`${(k2Counter / totalClimbers * 100).toFixed(2)}%`);
	console.log(`${(everestCounter / totalClimbers * 100).toFixed(2)}%`);
}
trekkingMania([ '5', '25', '41', '31', '250', '6' ]);
