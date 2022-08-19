function cleverLily(input) {
	let lilyAge = Number(input[0]);
	let washingMachinePrice = Number(input[1]);
	let priceForToy = Number(input[2]);

	let toyCount = 0;
	let moneyFromBD = 0;

	for (let i = 1; i <= lilyAge; i++) {
		if (i % 2 === 0) {
			moneyFromBD += 10 * i / 2;
			moneyFromBD--;
		} else {
			toyCount++;
		}
	}

	let moneyFromToys = toyCount * priceForToy;
	let saveMoney = moneyFromToys + moneyFromBD;

	if (saveMoney >= washingMachinePrice) {
		console.log(`Yes! ${(saveMoney - washingMachinePrice).toFixed(2)}`);
	} else {
		console.log(`No! ${(washingMachinePrice - saveMoney).toFixed(2)}`);
	}
}
cleverLily(["21",
"1570.98",
"3"])

