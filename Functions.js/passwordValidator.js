function passwordValidator(password) {
	function isPasswordLongEnough(string) {
		let stringL = string.length;
		for (let i = 0; i < stringL; i++) {
			if (stringL >= 6 && stringL <= 10) {
				return true;
			} else {
				return false;
			}
		}
	}

	function isLettersAndDigits(string) {
		for (let char of string) {
			let charCode = char.charCodeAt(0);
			if (!(charCode >= 48 && charCode <= 57) &&
            !(charCode >= 65 && charCode <= 90) &&
            !(charCode >= 97 && charCode <= 122)) {
				return false;
			} 
		}
        return true;
	}

	function isAtLeastTwoDigits(string) {
		let counter = 0;
		for (let char of string) {
			let charCode = char.charCodeAt(0);
			if (charCode >= 48 && charCode <= 57) {
				counter++;
			}
		}
		if (counter >= 2) {
			return true;
		} else {
			return false;
		}
	}

	let isLenghtValid = isPasswordLongEnough(password);
	let isContainLettersAndDigits = isLettersAndDigits(password);
	let isTwoDigits = isAtLeastTwoDigits(password);

	if (isLenghtValid && isContainLettersAndDigits && isTwoDigits) {
		console.log(`Password is valid`);
	}
	if (!isLenghtValid) {
		console.log(`Password must be between 6 and 10 characters`);
	}
	if (!isContainLettersAndDigits) {
		console.log(`Password must consist only of letters and digits`);
	}
	if (!isTwoDigits) {
		console.log(`Password must have at least 2 digits`);
	}
}
passwordValidator('logIn');
console.log(`---`);
passwordValidator('MyPass123');
console.log(`---`);
passwordValidator('Pa$s$s');
