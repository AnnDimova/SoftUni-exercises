function commonEl(arr1, arr2) {
	
	for (let fElement of arr1) {
		for (let sElement of arr2) {
			if (fElement === sElement) {
				console.log(fElement);
			}
		}
	}

	// for (let i = 0; i < arr1.length; i++) {
	// 	let firstArrElement = arr1[i];
	// 	for (let j = 0; j < arr2.length; j++) {
	// 		let secondArrElement = arr2[j];
	// 		if (firstArrElement === secondArrElement) {
	// 			console.log(firstArrElement);
	// 		}
	// 	}
	// }
}
commonEl([ 'Hey', 'hello', 2, 4, 'Peter', 'e' ], [ 'Petar', 10, 'hey', 4, 'hello', '2' ]);
commonEl([ 'S', 'o', 'f', 't', 'U', 'n', 'i', ' ' ], [ 's', 'o', 'c', 'i', 'a', 'l' ]);
