function grades(input) {
	let allStudents = Number(input[0]);
	let inputL = input.length;

	let counterTop = 0;
	let counterFour = 0;
	let counterThree = 0;
	let counterFail = 0;
	let averageGrade = 0;

	for (let i = 1; i < inputL; i++) {
		let grades = Number(input[i]);

		if (grades <= 2.99) {
			counterFail++;
		} else if (grades <= 3.99) {
			counterThree++;
		} else if (grades <= 4.99) {
			counterFour++;
		} else if (grades >= 5) {
			counterTop++;
		}

		averageGrade += grades / allStudents;
	}

	console.log(`Top students: ${(100 * counterTop / allStudents).toFixed(2)}%`);
	console.log(`Between 4.00 and 4.99: ${(100 * counterFour / allStudents).toFixed(2)}%`);
	console.log(`Between 3.00 and 3.99: ${(100 * counterThree / allStudents).toFixed(2)}%`);
	console.log(`Fail: ${(counterFail / allStudents * 100).toFixed(2)}%`);
	console.log(`Average: ${averageGrade.toFixed(2)}`);
}
grades([ '10', '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5' ]);
