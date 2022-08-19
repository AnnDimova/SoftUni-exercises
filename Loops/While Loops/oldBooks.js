function oldBooks(input) {
	let favouriteBook = input[0];

	let index = 1;
	let currentBook = input[index];
	let bookCounter = 0;

	while (currentBook !== 'No More Books') {
		if (currentBook === favouriteBook) {
			break;
		}
		bookCounter++;
		index++;
		currentBook = input[index];
	}

	if (currentBook === favouriteBook) {
		console.log(`You checked ${bookCounter} books and found it.`);
	} else {
		console.log(`The book you search is not here!`);
		console.log(`You checked ${bookCounter} books.`);
	}
}
oldBooks([ 'Troy', 'Stronger', 'Life Style', 'Troy' ]);
console.log(`-----`);
oldBooks([ 'The Spot', 'Hunger Games', 'Harry Potter', 'Torronto', 'Spotify', 'No More Books' ]);
console.log(`-----`);
oldBooks(['Bourne','True Story','Forever','More Space','The Girl','Spaceship','Strongest','Profit','Tripple','Stella','The Matrix','Bourne']);
