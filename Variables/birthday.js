function birthday(input){

    let rent = Number(input[0]);

    let priceForCake = rent * 0.2;
    let priceForDrinks = priceForCake - (priceForCake * 0.45);
    let priceForAnimator = rent * 1/3;

    let total = rent + priceForCake + priceForDrinks + priceForAnimator;

    console.log(total)
}