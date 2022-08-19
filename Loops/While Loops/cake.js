function cake(input) {
	let cakeSize = Number(input[0]) * Number(input[1]);
	let i = 2;
	let pieceCount = 0;

	while (i < input.length) {
		if (input[i] === 'STOP') {
			break;
		}

		let pieces = Number(input[i]);

		if (pieceCount <= cakeSize) {
			pieceCount += pieces;
		} else {
			break;
		}

		i++;
	}

	if (pieceCount <= cakeSize) {
		console.log(`${cakeSize - pieceCount} pieces are left.`);
	} else {
		console.log(`No more cake left! You need ${pieceCount - cakeSize} pieces more.`);
	}
}
cake([ '10', '10', '20', '20', '20', '20', '21' ]);
cake([ '10', '2', '2', '4', '6', 'STOP' ]);
