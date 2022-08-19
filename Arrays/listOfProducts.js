function listOfProducts(array) {
	let newArr = array.sort((a, b) => {
        return a.localeCompare(b);
    });

    for(let i = 0; i < newArr.length; i++){
        console.log(`${i + 1}.${newArr[i]}`)
    }
}
listOfProducts([ 'Potatoes', 'Tomatoes', 'Onions', 'Apples' ]);
listOfProducts([ 'Watermelon', 'Banana', 'Apples' ]);
