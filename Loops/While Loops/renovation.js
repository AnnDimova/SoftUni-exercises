function renovation(input) {
	let height = Number(input[0]);
	let width = Number(input[1]);
	let percent = Number(input[2]);

	let walls = height * width * 4;
	walls = Math.ceil(walls - walls / 100 * percent);

	let i = 3;
	let liters = 0;

	while (i < input.length) {
		if (input[i] === 'Tired!') {
			console.log(`${walls} quadratic m left.`);
			break;
		}

		liters = Number(input[i]);

		walls -= liters;

		i++;
	}

	if (liters > walls) {
		console.log(`All walls are painted and you have ${Math.abs(walls)} l paint left!`);
	} else if (walls === liters) {
		console.log(`All walls are painted! Great job, Pesho!`);
	}
}
renovation([ '3', '5', '10', '2', '3', '4', 'Tired!' ]);
renovation([ '2', '3', '25', '6', '7', '8' ]);
