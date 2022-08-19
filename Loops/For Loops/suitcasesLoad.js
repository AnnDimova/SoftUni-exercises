function suitcasesLoad(input) {
	let capacity = Number(input[0]);
	let inputL = input.length;

	let suitcasesCounter = 0;
	let freeSpaceLeft = 0;
	let suitcasesVol = 0;
	let currentThird = 0;

	for (let i = 1; i < inputL; i++) {
		let space = input[i];

		if (space === 'End') {
			console.log(`Congratulations! All suitcases are loaded!`);
			break;
		}
		if (freeSpaceLeft <= suitcasesVol) {
			console.log(`No more space!`);
			break;
		}

		suitcasesCounter++;

		currentThird = Number(space);
		if (suitcasesCounter === 3) {
			currentThird *= 1.1;
			space = currentThird;
		}

		freeSpaceLeft = capacity - Number(space);
		capacity = freeSpaceLeft;
		suitcasesVol = Number(space);
	}

	console.log(`Statistic: ${suitcasesCounter} suitcases loaded.`);
}

// suitcasesLoad([ '550', '100', '252', '72', 'End' ]);
suitcasesLoad([ '700.5', '180', '340.6', '126', '220' ]);
// suitcasesLoad([ '1200.2', '260', '380.5', '125.6', '305', 'End' ]);
