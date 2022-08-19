function demo(arr) {
	let secretSociety = '';
	for (let i = 0; i < arr.length; i++) {
		let [ firstLetter ] = arr[i];
		secretSociety += firstLetter;
	}

	console.log(secretSociety);
}
demo([ 'Adam', 'Sarah', 'Malcolm' ]);
