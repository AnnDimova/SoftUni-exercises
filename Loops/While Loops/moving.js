function moving(input) {
	let freeSpace = Number(input[0]) * Number(input[1]) * Number(input[2]);

	let i = 3;
	let cartonCount = 0;

	while (i < input.length) {
		if (input[i] === 'Done') {
			break;
		}

		let cartons = Number(input[i]);
		if (cartonCount <= freeSpace) {
			cartonCount += cartons;
		} else {
			break;
		}
		i++;
	}

	if (cartonCount <= freeSpace) {
		console.log(`${freeSpace - cartonCount} Cubic meters left.`);
	} else {
		console.log(`No more free space! You need ${cartonCount - freeSpace} Cubic meters more.`);
	}
}
moving([ '10', '10', '2', '20', '20', '20', '20', '122' ]);
moving([ '10', '1', '2', '4', '6', 'Done' ]);
