function employee(array) {
	for (let i = 0; i < array.length; i++) {
		let name = array[i];
		let obj = {
			employeeName: name
		};

		let nameL = name.length;
		obj.personalNumber = nameL;

		console.log(`Name: ${obj.employeeName} -- Personal Number: ${obj.personalNumber}`);
	}
}
employee([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal' ]);
employee([ 'Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland' ]);
