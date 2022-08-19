function vacationBookList(input){

    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let timeForBook = (pages / pagesPerHour).toFixed(2);
    let result = timeForBook / days;

    console.log(result)
}