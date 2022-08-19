function oscars(input) {
	let actorName = input[0];
	let startingPoints = Number(input[1]);
	let judgeCount = Number(input[2]);

	let totalPoints = 0;

	for (let i = 3; i < input.length; i++) {
		let judgeName = input[i++];
		let judgePoints = Number(input[i]);
		let judgeNameL = Number(judgeName.length);

		totalPoints = startingPoints + judgeNameL * judgePoints / 2;
		startingPoints = totalPoints;

		if (totalPoints > 1250.5) {
			break;
		}
	}

	if (totalPoints > 1250.5) {
		console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
	} else if (totalPoints < 1250.5) {
		console.log(`Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
	}
}
oscars([
	'Zahari Baharov',
	'205',
	'4',
	'Johnny Depp',
	'45',
	'Will Smith',
	'29',
	'Jet Lee',
	'10',
	'Matthew Mcconaughey',
	'39'
]);
