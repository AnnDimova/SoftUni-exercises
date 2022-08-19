// function dishwasher(input) {
// 	let bottlesInMl = Number(input[0]) * 750;
// 	let detergentForDishes = 5;
// 	let detergentForPots = 15;

// 	let index = 1;
// 	let command = input[index];

// 	let dishes = 0;
// 	let pots = 0;
// 	let everyThirdMove = 1;

// 	let total = 0;

// 	while (bottlesInMl >= total) {
// 		let things = Number(command);

// 		if (everyThirdMove % 3 === 0) {
// 			pots += things;
// 		} else {
// 			dishes += things;
// 		}
// 		index++;
// 		command = input[index];
// 		everyThirdMove++;

// 		total = dishes * detergentForDishes + pots * detergentForPots;

// 		if(command === "End"){
// 			break;
// 		}
	
// 	}
// 	if (bottlesInMl >= total) {
// 		console.log(`Detergent was enough!`);
// 		console.log(`${dishes} dishes and ${pots} pots were washed.`);
// 		console.log(`Leftover detergent ${bottlesInMl - total} ml.`);
// 	} else {
// 		console.log(`Not enough detergent, ${Math.abs(total - bottlesInMl)} ml. more necessary!`);
// 	}
// }

function washer(input) {
	const detergentForDishes = 5;
	const detergentForPots = 15;
	let i = 1;

	let detergentEnough = true;
	
	let detergent = Number(input[0] * 750);
	let dishes = 0;
	let pots = 0;
	let thirdMove = 1;
	
	while (i < input.length) {
		if (input[i] == "End") {
			break;
		}

		const count = Number(input[i]);

		if (thirdMove % 3 == 0) {
			pots += count;
			detergent-= count * detergentForPots;
		} else {
			dishes += count;
			detergent-= count * detergentForDishes;
		}

		if (detergent <= 0) {
			detergentEnough = false;
			break;
		}

		i++;
		thirdMove++;
	}

	if (detergentEnough) {
		console.log(`Detergent was enough!`);
		console.log(`${dishes} dishes and ${pots} pots were washed.`);
		console.log(`Leftover detergent ${detergent} ml.`);
	} else {
		console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`);
	}

}

washer([ '2', '53', '65', '55', 'End' ]);
console.log(`---`);
washer([ '1', '10', '15', '10', '12', '13', '30' ]);
