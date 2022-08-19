function specificValueInArr(){

    let array = [5, 10, 45, 90];

    // let found = array.includes(2);
    // console.log(found);
    
    let element = 8;

    for(let i = 0; i < array.length; i++) {
        if(array[i] === element){
            console.log("Number 5 is included.")
        } else {
            console.log("It is not.")
        }
    }
}
specificValueInArr();