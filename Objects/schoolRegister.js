function schoolRegister(input) {
	let register = {};

	for (let line of input) {
		let result = line.split(/[: ,]+/);
		let name = result[2];
		let grade = Number(result[4]);
		let score = Number(result[10]);
		if (score > 3) {
			let student = { name, score };
			if (!register.hasOwnProperty(grade)) {
				register[grade] = [];
			}
			register[grade].push(student);
		}
	}

	let sortedGrades = Object.keys(register).sort((a, b) => a - b);
	for (let grade of sortedGrades) {
		let students = register[grade];
		console.log(`${grade} Grade`);
		console.log(`List of students: ${students.map((s) => s.name).join(', ')}`);
		console.log(`Average annual score from last year: ${average(students.map((s) => s.score)).toFixed(2)}`);
		console.log();
	}

	function average(arr) {
		return arr.reduce((a, b) => a + b, 0) / arr.length;
	}
}
schoolRegister([
	'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
	'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
	'Student name: George, Grade: 8, Graduated with an average score: 2.83',
	'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
	'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
	'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
	'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
	'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
	'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
	'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
	'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
	'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00'
]);
