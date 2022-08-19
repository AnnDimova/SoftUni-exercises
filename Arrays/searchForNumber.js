function searchForNum(arr1, arr2) {
	let [ take, remove, search ] = arr2;
	let newArr = arr1.slice(0, take).splice(remove);
	let counter = 0;
	for (let i = 0; i < newArr.length; i++) {
		if (newArr.includes(search)) {
			counter++;
			break;
		}
	}

	console.log(`Number ${search} occurs ${counter} times.`);
}
searchForNum([ 5, 2, 3, 4, 1, 6 ], [ 5, 2, 3 ]);
searchForNum([ 7, 1, 5, 8, 2, 7 ], [ 3, 1, 5 ]);
