function unneededSymbol(a, b){
    let unCommanSymbol = [];

    for(let i = 0; i < a.length; i++){
        if(!(b.includes(a[i]))){
            unCommanSymbol.push(a[i]);
        }
    }
    for(let i = 0; i < b.length; i++){
        if(!(a.includes(b[i]))){
            unCommanSymbol.push(b[i]);
        }
    }

    return unCommanSymbol.join('');
}
console.log(unneededSymbol('abde','ab@de'))
//използвай обект или Маp