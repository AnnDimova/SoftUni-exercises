// function movie(input) {
// 	let output = [];
// 	for (let i = 0; i < input.length; i++) {
// 		if (input[i].includes('addMovie ')) {
// 			let result = input[i].split('addMovie ');
// 			let obj = {
// 				name: result[1]
// 			};
// 			output.push(obj);
// 		} else if (input[i].indexOf('directedBy ') != -1) {
// 			let result = input[i].split(' directedBy ');
// 			for (let j = 0; j < output.length; j++) {
// 				if (result[0] === output[j].name) {
// 					output[j].director = result[1];
// 					break;
// 				}
// 			}
// 		} else if (input[i].includes('onDate')) {
// 			let result = input[i].split(' onDate ');
// 			for (let j = 0; j < output.length; j++) {
// 				if (result[0] === output[j].name) {
// 					output[j].date = result[1];
// 					break;
// 				}
// 			}
// 		}
// 	}

// 	for (let i of output) {
// 		if (i.name != undefined && i.director != undefined && i.date != undefined) {
// 			console.log(JSON.stringify(i));
// 		}
// 	}
// }
// movie([
// 	'addMovie Fast and Furious',
// 	'addMovie Godfather',
// 	'Inception directedBy Christopher Nolan',
// 	'Godfather directedBy Francis Ford Coppola',
// 	'Godfather onDate 29.07.2018',
// 	'Fast and Furious onDate 30.07.2018',
// 	'Batman onDate 01.08.2018',
// 	'Fast and Furious directedBy Rob Cohen'
// ]);



