function fibonacci(n){
    let i = 0;
    let j = 1;
    let k = n;

    for(let index = 2; index <= n; index++){
        k = i + j;
        i = j;
        j = k;
    }

    console.log(k)
}
fibonacci(10)