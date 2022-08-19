function bills(input) {
	let months = Number(input[0]);
	let inputL = input.length;

	let electricityBill = 0;
	let waterBill = months * 20;
	let internetBill = months * 15;

	for (let i = 1; i < inputL; i++) {
		let sum = Number(input[i]);
		electricityBill += sum;
	}

	let commonBills = (electricityBill + waterBill + internetBill) * 1.2;
	let avarageBills = (electricityBill + waterBill + internetBill + commonBills) / months;

	console.log(`Electricity: ${electricityBill.toFixed(2)} lv`);
    console.log(`Water: ${waterBill.toFixed(2)} lv`);
    console.log(`Internet: ${internetBill.toFixed(2)} lv`);
    console.log(`Other: ${commonBills.toFixed(2)} lv`);
    console.log(`Average: ${avarageBills.toFixed(2)} lv`);

}
bills([ '5', '68.63', '89.25', '132.53', '93.53', '63.22' ]);
