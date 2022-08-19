function steps(input) {
	let goal = 10000;
	let total = 0;
	let i = 0;

	while (total < goal) {
		let steps = input[i];
		i++;

		if (steps === 'Going home') {
			total += Number(input[i++]);
			break;
		} else {
			total += Number(steps);
		}
	}

	if (total >= goal) {
		console.log(`Goal reached! Good job!`);
		console.log(`${total - goal} steps over the goal!`);
	} else {
		console.log(`${goal - total} more steps to reach goal.`);
	}
}
steps([ '1000', '1500', '2000', '6500' ]);
console.log(`---`);
steps([ '1500', '3000', '250', '1548', '2000', 'Going home', '2000' ]);
console.log(`---`);
steps([ '1500', '300', '2500', '3000', 'Going home', '200' ]);
console.log(`---`);
steps([ '125', '250', '4000', '30', '2678', '4682' ]);
