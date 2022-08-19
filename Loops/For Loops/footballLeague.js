function footballLeague(input) {
	let stadion = Number(input[0]);
	let allFans = Number(input[1]);
	let inputL = input.length;

	let fansA = 0;
	let fansB = 0;
	let fansV = 0;
	let fansG = 0;
    

	for (let i = 2; i < inputL; i++) {
		let sector = input[i];

		switch (sector) {
			case 'A':
                fansA++;
                break;
			case 'B':
                fansB++;
                break;
			case 'V':
                fansV++;
                break;
			case 'G':
                fansG++;
                break;
		}
	}

    console.log(`${((fansA / allFans) * 100).toFixed(2)}%`)
    console.log(`${((fansB / allFans) * 100).toFixed(2)}%`)
    console.log(`${((fansV / allFans) * 100).toFixed(2)}%`)
    console.log(`${((fansG / allFans) * 100).toFixed(2)}%`)
    console.log(`${((allFans / stadion) * 100).toFixed(2)}%`)
}
footballLeague([ '76', '10', 'A', 'V', 'V', 'V', 'G', 'B', 'A', 'V', 'B', 'B' ]);
