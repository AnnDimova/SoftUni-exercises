function flightSchedule(arr) {
	let sector = arr[0];
	let changedStatus = arr[1];
	let statusToCheck = arr[2];

	let flightInfo = [];

	for (let i = 0; i < sector.length; i++) {
		let result = sector[i].split(' ');
		let obj = {
			sectorNum: result[0],
			destination: result[1],
			status: 'Ready to fly'
		};
		flightInfo.push(obj);
	}

	for (let i = 0; i < changedStatus.length; i++) {
		let result = changedStatus[i].split(' ');
		for (let j = 0; j < flightInfo.length; j++) {
			if (result[0] === flightInfo[j].sectorNum) {
				flightInfo[j].status = 'Cancelled';
				break;
			}
		}
	}

	for (let i of flightInfo) {
		if (i.status === statusToCheck.toString()) {
			console.log(`{ Destination: '${i.destination}', Status: '${i.status}' }`);
		}
	}
}
flightSchedule([
	[
		'WN269 Delaware',
		'FL2269 Oregon',
		'WN498 Las Vegas',
		'WN3145 Ohio',
		'WN612 Alabama',
		'WN4010 New York',
		'WN1173 California',
		'DL2120 Texas',
		'KL5744 Illinois',
		'WN678 Pennsylvania'
	],
	[ 'DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled' ],
	[ 'Cancelled' ]
]);
console.log(`---`);
flightSchedule([
	[
		'WN269 Delaware',
		'FL2269 Oregon',
		'WN498 Las Vegas',
		'WN3145 Ohio',
		'WN612 Alabama',
		'WN4010 New York',
		'WN1173 California',
		'DL2120 Texas',
		'KL5744 Illinois',
		'WN678 Pennsylvania'
	],
	[ 'DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled' ],
	[ 'Ready to fly' ]
]);
