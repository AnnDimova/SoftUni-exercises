function careOfPuppy(input) {
	let boughtFood = Number(input[0]) * 1000;
	let inputL = input.length;

	let eatenFood = 0;

	for (let i = 1; i < inputL; i++) {
		let food = input[i];

		if (food === 'Adopted') {
			break;
		}

		eatenFood += Number(food);
	}
	if (eatenFood <= boughtFood) {
		console.log(`Food is enough! Leftovers: ${boughtFood - eatenFood} grams.`);
	} else {
		console.log(`Food is not enough. You need ${eatenFood - boughtFood} grams more.`);
	}
}
careOfPuppy([ '2', '999', '456', '999', '999', '123', '456', 'Adopted' ]);
careOfPuppy([ '3', '1000', '1000', '1000', 'Adopted' ]);
careOfPuppy([ '4', '130', '345', '400', '180', '230', '120', 'Adopted' ]);
