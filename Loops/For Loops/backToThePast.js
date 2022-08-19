function backToThePast(input) {
	let inheritance = Number(input[0]);
	let yearOfLife = Number(input[1]);

	let neededAmount = 0;
	let ivanYears = 17;

	for (let i = 1800; i <= yearOfLife; i++) {
		if (i % 2 === 0) {
			neededAmount += 12000;
		} else {
			ivanYears += 2;
			neededAmount += 12000 + ivanYears * 50;
		}
	}

	if (neededAmount <= inheritance) {
		console.log(
			`Yes! He will live a carefree life and will have ${(inheritance - neededAmount).toFixed(2)} dollars left.`
		);
	} else {
		console.log(`He will need ${(neededAmount - inheritance).toFixed(2)} dollars to survive.`);
	}
}
backToThePast([ '50000', '1802' ]);
