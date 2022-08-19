function minNumber(args){
    let n = Number(args[0]);
    let min = Number.POSITIVE_INFINITY;

    for(i = 1; i <= n; i++){
        let num = Number(args[i]);

        if(num < min){
            min = num
        }
    }
        console.log(min)
}

minNumber(['-5','0','30'])