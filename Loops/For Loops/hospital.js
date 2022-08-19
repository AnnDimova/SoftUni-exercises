function hospital(input) {
	let period = Number(input[0]);
    let inputL = input.length;
	let doctors = 7;
	let treated = 0;
	let untreated = 0;

	for (let i = 1; i < inputL; i++) {
		let patients = Number(input[i]);

		if (i % 3 === 0 && untreated > treated) {
			doctors++;
		}

		if (patients <= doctors) {
			treated += patients;
		} else {
			treated += doctors;
			untreated += patients - doctors;
		}
	}

	console.log(`Treated patients: ${treated}.`);
	console.log(`Untreated patients: ${untreated}.`);
}
hospital([ '3', '7', '7', '7']);
