function indexOfArrayEl(arr, element){

    for(let i = 0; i < arr.length; i++){
       
        let currentNumber = arr[i];
        let index = i;

        if(currentNumber === element){
            return index                    
        } 
        
    }
    return -1
}
indexOfArrayEl([7, 9, 16, 10, 9, 3], 16)