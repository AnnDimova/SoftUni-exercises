function factoriel(number) {
	if (number === 0) {
		return 1;
	} else return number * factoriel(number - 1);
}
factoriel(6)

let factoriel = (n) => {
	if (n === 0) {
		return 1;
	}
	for (let i = n - 1; i >= 1; i--) {
		n *= i;
	}
	return n;
};
console.log(factoriel(6));
