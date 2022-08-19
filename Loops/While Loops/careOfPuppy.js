function careOfPuppy(input) {
	let boughtFood = Number(input[0]) * 1000;

	let index = 1;
	let currentInput = input[index];

	let totalEatenFood = 0;

	while (currentInput !== 'Adopted') {
		let food = Number(input[index]);

		totalEatenFood += food;

		index++;
		currentInput = input[index];
	}

    if(totalEatenFood <= boughtFood){
        console.log(`Food is enough! Leftovers: ${boughtFood - totalEatenFood} grams.`)
    } else {
        console.log(`Food is not enough. You need ${totalEatenFood - boughtFood} grams more.`)
    }
}
careOfPuppy([ '4', '130', '345', '400', '180', '230', '120', 'Adopted' ]);
careOfPuppy([ '3', '1000', '1000', '1000', 'Adopted' ]);
careOfPuppy([ '2', '999', '456', '999', '999', '123', '456', 'Adopted' ]);
