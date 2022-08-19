// function vacation(input) {
// 	let index = 0;

// 	let neededAmount = Number(input[index++]);
// 	let savedAmount = Number(input[index++]);

// 	let daysCount = 0;
// 	let spendingDays = 0;

// 	while (savedAmount < neededAmount) {
// 		let action = input[index++];
// 		let money = Number(input[index++]);
// 		daysCount++;

// 		if (action === 'spend') {
// 			if (savedAmount < money) {
// 				savedAmount = 0;
// 			} else {
// 				savedAmount -= money;
// 			}
// 			spendingDays++;

// 			if (spendingDays === 5) {
// 				break;
// 			}
// 		} else {
// 			spendingDays = 0;
// 			savedAmount += money;
// 		}
// 	}

// 	if (spendingDays === 5) {
// 		console.log(`You can't save the money.`);
// 		console.log(`${daysCount}`);
// 	} else {
// 		console.log(`You saved the money for ${daysCount} days.`);
// 	}
// }

function vacation(input) {
	let neededAmount = Number(input[0]);
	let savedAmount = Number(input[1]);

	let i = 2;
	let daysCount = 0;

	while (i < input.length) {
		let command = input[i];
		let money = input[i++];

		if (daysCount === 5) {
			break;
		}

		if (command === 'spend') {
			if (savedAmount < money) {
				savedAmount = 0;
			} else {
				savedAmount -= money;
			}
		} else if (command === 'save') {
			savedAmount += money;
		}

		i++;
		daysCount++;
	}

	if (daysCount === 5) {
		console.log(`You can't save the money.`);
		console.log(`${daysCount}`);
	} else {
		console.log(`You saved the money for ${daysCount} days.`);
	}
}
vacation([ '2000', '1000', 'spend', '1200', 'save', '2000' ]);
vacation([ '110', '60', 'spend', '10', 'spend', '10', 'spend', '10', 'spend', '10', 'spend', '10' ]);
vacation([ '250', '150', 'spend', '50', 'spend', '50', 'save', '100', 'save', '100' ]);
