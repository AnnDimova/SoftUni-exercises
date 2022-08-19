function towns(array) {
	for (let i = 0; i < array.length; i++) {
		let splitArr = array[i].split(' | ');

		let townInfo = {
			town: splitArr[0],
			latitude: Number(splitArr[1]).toFixed(2),
			longitude: Number(splitArr[2]).toFixed(2)
		};

		console.log(townInfo);
	}
}
towns([ 'Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625' ]);
towns([ 'Plovdiv | 136.45 | 812.575' ]);
