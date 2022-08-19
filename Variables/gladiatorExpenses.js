function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
	let price = 0;

	for (let currentFight = 1; currentFight < lostFights; currentFight++) {
		if (currentFight % 2 === 0) {
			price += helmetPrice;
		}
		if (currentFight % 3 === 0) {
			price += swordPrice;
		}
		if (currentFight % 6 === 0) {
			price += shieldPrice;
		}
		if (currentFight % 12 === 0) {
			price += armorPrice;
		}
	}

    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`)
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
