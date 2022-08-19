function reportSystem(input) {
	let charityAmount = Number(input[0]);
	let i = 1;
	let cash = 0;
	let card = 0;
	let cashCounter = 0;
	let cardCounter = 0;

	while (i < input.length) {
		if (input[i] === 'End') {
			console.log(`Failed to collect required money for charity.`);
			break;
		}

		let transaction = Number(input[i]);

		if (i % 2 === 0) {
			if (transaction <= 10) {
				console.log(`Error in transaction!`);
			} else {
				console.log(`Product sold!`);
				card += transaction;
				cardCounter++;
			}
		} else {
			if (transaction >= 100) {
				console.log(`Error in transaction!`);
			} else {
				console.log(`Product sold!`);
				cash += transaction;
				cashCounter++;
			}
		}

		i++;
	}

	let allAmounts = cash + card;

	if (allAmounts >= charityAmount) {
		console.log(`Average CS: ${(cash / cashCounter).toFixed(2)}`);
		console.log(`Average CC: ${(card / cardCounter).toFixed(2)}`);
	}
}
reportSystem([ '500', '120', '8', '63', '256', '78', '317' ]);
reportSystem([ '600', '86', '150', '98', '227', 'End' ]);
