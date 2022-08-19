function sumOfValues(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        let num = Number(arr[i]);

        sum += num;
    }

    console.log(sum);
}

sumOfValues(['1', '89', '98']);