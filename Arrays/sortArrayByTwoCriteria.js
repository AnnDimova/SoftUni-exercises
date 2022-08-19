function sort(array) {
	array.sort((a, b) => {
		return a.length - b.length || a.localeCompare(b);
	});

	console.log(array.join('\n'));
}
sort([ 'alpha', 'beta', 'gamma' ]);
sort([ 'Isacc', 'Theodor', 'Jack', 'Harrison', 'George' ]);
