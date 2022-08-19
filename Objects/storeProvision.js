function storeProvision(currentStocks, forDelivery) {
	let obj = {};

	for (let i = 0; i < currentStocks.length; i += 2) {
		let product = currentStocks[i];
		let quantity = Number(currentStocks[i + 1]);
		obj[product] = quantity;
	}

	for (let i = 0; i < forDelivery.length; i += 2) {
		let product = forDelivery[i];
		let quantity = Number(forDelivery[i + 1]);

		if (obj.hasOwnProperty(product)) {
			obj[product] += quantity;
		} else {
			obj[product] = quantity;
		}
	}

	for (let products in obj) {
		console.log(`${products} -> ${obj[products]}`);
	}
}
storeProvision(
	[ 'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ],
	[ 'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30' ]
);
