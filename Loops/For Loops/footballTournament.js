function footballTournament(input) {
	let teamName = input[0];
	let playedGames = Number(input[1]);
	let inputL = input.length;

	let wCounter = 0;

	let dCounter = 0;
	let lCounter = 0;

	for (let i = 2; i < inputL; i++) {
		let score = input[i];
		switch (score) {
			case 'W':
				wCounter++;
				break;
			case 'D':
				dCounter++;
				break;
			case 'L':
				lCounter++;
				break;
		}
	}

	let w = wCounter * 3;
	let d = dCounter * 1;
	let totalActive = w + d;

	if (playedGames === 0) {
		console.log(`${teamName} hasn't played any games during this season.`);
	} else {
		console.log(`${teamName} has won ${totalActive} points during this season.`);
		console.log(`Total stats:`);
		console.log(`## W: ${wCounter}`);
		console.log(`## D: ${dCounter}`);
		console.log(`## L: ${lCounter}`);
		console.log(`Win rate: ${(wCounter / playedGames * 100).toFixed(2)}%`);
	}
}
footballTournament([ 'Liverpool', '10', 'W', 'D', 'D', 'W', 'L', 'W', 'D', 'D', 'W', 'W' ]);
footballTournament([ 'Barcelona', '7', 'W', 'D', 'L', 'L', 'W', 'W', 'D' ]);
footballTournament([ 'Chelsea', '0' ]);
