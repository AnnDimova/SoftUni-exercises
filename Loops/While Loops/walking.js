function walking(input) {
	let index = 0;

	let goal = 10000;
	let totalSteps = 0;

	while (totalSteps < goal) {
		let steps = input[index++];

		if (steps === 'Going home') {
			totalSteps += Number(input[index++]);
			break;
		} else {
			totalSteps += Number(steps);
		}
	}

	if (totalSteps >= goal) {
		console.log(`Goal reached! Good job!`);
		console.log(`${totalSteps - goal} steps over the goal!`);
	} else {
		console.log(`${goal - totalSteps} more steps to reach goal.`);
	}
}
walking([ '1000', '1500', '2000', '6500' ]);
walking([ '1500', '3000', '250', '1548', '2000', 'Going home', '2000' ]);
walking([ '1500', '300', '2500', '3000', 'Going home', '200' ]);
walking([ '125', '250', '4000', '30', '2678', '4682' ]);
