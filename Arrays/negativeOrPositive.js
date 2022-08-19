function negativeOrPositive(array) {
	let newArr = array.map((el) => Number(el)).sort((a, b) => a - b);

	console.log(newArr.join('\n'));
}
// negativeOrPositive([ '7', '-2', '8', '9' ]);
negativeOrPositive(['3', '-2', '0', '-1']);

