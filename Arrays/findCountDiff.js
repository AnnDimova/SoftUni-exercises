function findCountDiff(arr){
    let odd = 0;
    let even = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            continue;
        }
        if(arr[i] % 2 === 0){
            even++
        } else {
            odd++
        }
    }

    return odd - even
}
console.log(findCountDiff([0,1,2,3,4,5]))