function sumOddNumbers(arr) {
	// let sum = 0;
	// let newArr = [];

	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] % 2 !== 0) {
	// 		newArr.push(arr[i]);
	// 	}
	// }

	// newArr.sort((a, b) => b - a).splice(3);
	// for (let i = 0; i < newArr.length; i++) {
	// 	sum += newArr[i];
	// }
	// console.log(sum);

	// let oddNumbers = arr
	// 	.filter((number) => {
	// 		return number % 2 !== 0;
	// 	})
	// 	.sort((a, b) => b - a)
	//     .splice(0, 3)
	//     .reduce((sum, el) => {
	//         return sum + el
	//     }, 0)

	// console.log(oddNumbers);

let resultArr = [];
let sum = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 1){
        resultArr.push(arr[i])
        for(let j = 0; j < resultArr.length; j++){
            let biggerNum = resultArr[0]
            if(resultArr.length < 3){
                if(resultArr[j] > biggerNum){
                    biggerNum = resultArr[j]
                }
                sum += biggerNum
            }
        }
    }
}
console.log(sum)

}
sumOddNumbers([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
