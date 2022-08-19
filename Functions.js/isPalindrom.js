// function palindrom(a) {
// 	let b = '';

// 	for (let i = 0; i < a.length; i++) {
// 		b += a[i];
// 	}

// 	b = b.split('').reverse().join('');

// 	if (a === b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// palindrom('anna')

function isPalindrom(str) {
	let newStr = '';
	for (let i = (str.length - 1); i >= 0; i--) {
		newStr += str[i];
	}
	if (newStr === str) {
		return true;
	} else {
		return false;
	}
}
console.log(isPalindrom('polop'));

// function isPalindrom(str) {
// 	for (let i = 0; i < Math.floor(str.length / 2); i++) {
// 		if (str[i] != str[str.length - 1 - i]) {
// 			return false;
// 		}
// 		return true;
// 	}
// }
// console.log(isPalindrom('anna'));
