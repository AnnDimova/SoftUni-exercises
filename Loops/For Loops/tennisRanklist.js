function tennisRanklist(input) {
	let turneyNumber = Number(input[0]);
	let startingPoints = Number(input[1]);

	let points = 0;
	let winnerCounter = 0;

	for (let i = 2; i < input.length; i++) {
		let turney = input[i];

		switch (turney) {
			case 'F':
				points += 1200;
				break;
			case 'SF':
				points += 720;
				break;
			case 'W':
				points += 2000;
				winnerCounter++;
				break;
		}
	}
	let totalPoints = startingPoints + points;
	let avaragePoints = points / turneyNumber;
	let winnerPercent = (winnerCounter / turneyNumber) * 100;

	console.log(`Final points: ${totalPoints}`);
	console.log(`Average points: ${Math.floor(avaragePoints)}`);
	console.log(`${winnerPercent.toFixed(2)}%`);
}
tennisRanklist([ '7', '1200', 'SF', 'F', 'W', 'F', 'W', 'SF', 'W' ]);
