// function sortArray(arr) {
	
// 	let numArr = arr.filter((el) => typeof el === 'number');
// 	let strArr = arr.filter((el) => typeof el === 'string');

// 	newArr.push(strArr, numArr)


// 	const helper = (a, b) => ({
// 		'numbernumber': a-b,
// 		'stringnumber': 1,
// 		'numberstring': -1,
// 		'stringstring': a > b ? 1 : -1
// 	  }[typeof(a) + typeof(b)]);
	  
	  
// 	  a = ['b', 2, 'c', 'a', 1, 3, 'hello', 1009];
// 	  a.sort(helper);
// 	  console.log(a);

// 	  function compare(a, b){
//         if(typeof a === 'number' && typeof b === 'number'){
//             return a -b;
//         }
//         if(typeof a === 'number' && typeof b === 'string'){
//             return -1;
//         }
//         if(typeof a === 'string' && typeof b === 'number'){
//             return 1;
//         }
//         if(typeof a === 'string' && typeof b === 'string'){
//             if(a < b){
//                 return -1;
//             } else {
//                 return 1;
//             }
//         }
//         return 0;
//     }
    
//     return arr.sort(compare())

// }

function sortArray(arr) {
    let numArr = arr.filter((el) => typeof el === 'number').sort((a, b) => a - b);
    let strArr = arr.filter((el) => typeof el === 'string').sort();
    
    return strArr.concat(numArr)
}
console.log(sortArray([ 'a', 1, 'b', 2, 'c', 3 ]));
