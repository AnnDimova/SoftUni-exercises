function reverseArray(input){

    let newArr = [];

    for(let i = input.length - 1; i >= 0; i--){
        let result = input[i];
        
        newArr.push(result);
        
    }  

    return newArr;


}
console.log(reverseArray([1,5,6,7]))