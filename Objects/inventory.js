function inventory(input) {
	let output = [];

	for (let i = 0; i < input.length; i++) {
		let result = input[i].split(' / ');

		let obj = {
			heroName: result[0],
			level: result[1],
			items: result[2]
		};

		output.push(obj);
	}

	output
    .sort((a, b) => a.level - b.level)
    .forEach((el) => {
		console.log(`Hero: ${el.heroName}`);
		console.log(`level => ${el.level}`);
		console.log(`items => ${el.items}`);
	});
}
inventory([
	'Isacc / 25 / Apple, GravityGun',
	'Derek / 12 / BarrelVest, DestructionSword',
	'Hes / 1 / Desolator, Sentinel, Antara'
]);
inventory([ 'Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara' ]);
