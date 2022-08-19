function examPreparation(input) {
	let index = 0;
	let maxUnsatisfyingGrades = Number(input[index]);
	index++;
	let unsatisfyingGrades = 0;
	let gradesSum = 0;
	let problemsCount = 0;
	let lastProblem = '';

	let currentProblem = input[index];
	index++;
	while (currentProblem !== 'Enough') {
		let currentGrade = Number(input[index]);
		index++;

		if (currentGrade <= 4) {
			unsatisfyingGrades++;

			if (unsatisfyingGrades === maxUnsatisfyingGrades) {
				break;
			}
		}
		gradesSum += currentGrade;
		problemsCount++;
		lastProblem = currentProblem;

		currentProblem = input[index];
		index++;
	}

	if (unsatisfyingGrades === maxUnsatisfyingGrades) {
		console.log(`You need a break, ${maxUnsatisfyingGrades} poor grades.`);
	} else {
		console.log(`Average score: ${(gradesSum / problemsCount).toFixed(2)}`);
		console.log(`Number of problems: ${problemsCount}`);
		console.log(`Last problem: ${lastProblem}`);
	}
}
examPreparation([ '3', 'Money', '6', 'Story', '4', 'Spring Time', '5', 'Bus', '6', 'Enough' ]);
examPreparation([ '2', 'Income', '3', 'Game Info', '6', 'Best Player', '4' ]);
