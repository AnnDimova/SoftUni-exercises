function distinctArr(array) {
	// let newArr = [ ...new Set(array) ];
	// console.log(newArr.join(' '));


    console.log(array.filter((item, index) => array.indexOf(item) === index))
}
distinctArr([ 1, 2, 3, 4 ]);
distinctArr([ 7, 8, 9, 7, 2, 3, 4, 1, 2 ]);
distinctArr([ 20, 8, 12, 13, 4, 4, 8, 5 ]);
