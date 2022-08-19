function catalog(input) {
	let output = [];

	for (let i = 0; i < input.length; i++) {
		let result = input[i].split(' : ');
		let obj = {
			productName: result[0],
			productPrice: Number(result[1])
		};
		output.push(obj);
	}

	output.sort((a, b) => a.productName.localeCompare(b.productName));

	let currentLetter = '';
	for (const product of output) {
		if (product.productName.charAt(0).toUpperCase() === currentLetter) {
			console.log(`${product.productName}: ${product.productPrice}`);
		} else {
			currentLetter = product.productName.charAt(0).toUpperCase();
			console.log(currentLetter);
			console.log(`${product.productName}: ${product.productPrice}`);
		}
	}
}
catalog([
	'Appricot : 20.4',
	'Fridge : 1500',
	'TV : 1499',
	'Deodorant : 10',
	'Boiler : 300',
	'Apple : 1.25',
	'Anti-Bug Spray : 15',
	'T-Shirt : 10'
]);
