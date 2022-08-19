function calories(input) {
	let obj = {};

	for (let i = 0; i < input.length; i += 2) {
		let product = input[i];
		let calorie = Number(input[i + 1]);
		obj[product] = calorie;
	}

	console.log(obj);
}
calories([ 'Yoghurt', '48', 'Rise', '138', 'Apple', '52' ]);
