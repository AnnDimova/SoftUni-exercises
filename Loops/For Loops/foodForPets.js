function foodForPets(input) {
	let days = Number(input[0]);
	let totalEatenFood = Number(input[1]);
	let inputL = input.length;

	let foodEatenByDog = 0;
	let foodEatenByCat = 0;
	let allFood = 0;
	let currentDogFood = 0;
	let currentCatFood = 0;
	let daysCounter = 0;
	let allBisquits = 0;

	for (let i = 2; i < inputL; i++) {
		daysCounter++;
		let dog = Number(input[i++]);
		foodEatenByDog += dog;
		allFood += dog;
		currentDogFood = dog;
		let cat = Number(input[i]);
		foodEatenByCat += cat;
		allFood += cat;
		currentCatFood = cat;

		if (daysCounter === 3) {
			let bisquits = (currentCatFood + currentDogFood) * 0.1;
			allBisquits += bisquits;
		}
	}

	console.log(`Total eaten biscuits: ${Math.round(allBisquits)}gr.`);
	console.log(`${(allFood / totalEatenFood * 100).toFixed(2)}% of the food has been eaten.`);
	console.log(`${(foodEatenByDog / allFood * 100).toFixed(2)}% eaten from the dog.`);
	console.log(`${(foodEatenByCat / allFood * 100).toFixed(2)}% eaten from the cat.`);
}
foodForPets([ '3', '1000', '300', '20', '100', '30', '110', '40' ]);
foodForPets([ '3', '500', '100', '30', '110', '25', '120', '35' ]);
