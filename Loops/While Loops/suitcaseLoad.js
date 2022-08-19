function suitcasesLoad(input) {
	let freeSpace = Number(input[0]);

	let index = 1;
	let command = input[index];
	let suitcaseCounter = 0;
	let suitcaseSize = 0;

	while (command !== 'End') {
		suitcaseSize = Number(command);
		index++;

		if ((suitcaseCounter + 1) % 3 === 0) {
			suitcaseSize *= 1.1;
		}

		if (freeSpace < suitcaseSize) {
			console.log(`No more space!`);
			break;
		}

		freeSpace -= suitcaseSize;
		command = input[index];
		suitcaseCounter++;

		if (command === 'End') {
			console.log(`Congratulations! All suitcases are loaded!`);
		}
	}
	console.log(`Statistic: ${suitcaseCounter} suitcases loaded.`);
}

suitcasesLoad([ '550', '100', '252', '72', 'End' ]);
console.log(`---`);
suitcasesLoad([ '700.5', '180', '340.6', '126', '220' ]);
console.log(`---`);
suitcasesLoad([ '1200.2', '260', '380.5', '125.6', '305', 'End' ]);
