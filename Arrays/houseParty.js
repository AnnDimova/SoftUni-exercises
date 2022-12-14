function houseParty(array) {
	let list = [];
	for (let i = 0; i < array.length; i++) {
		let line = array[i].split(' ');
		let name = line[0];
		let command = line[2];

        if(command !== 'not'){
            if(list.includes(name) === true){
                console.log(`${name} is already in the list!`);
                continue;
            }
            list.push(name)
        } else {
            if(list.includes(name) === false) {
                console.log(`${name} is not in the list!`);
                continue;
            }
            list = list.filter(x => x != name)
        }
	}
    console.log(list.join('\n'));
}

houseParty([ 'Allie is going!', 'George is going!', 'John is not going!', 'George is not going!' ]);
houseParty([ 'Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!' ]);
