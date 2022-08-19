function charity(input){

    let days = Number(input[0]);
    let chefs = Number(input[1]);
    let cakes = Number(input[2]);
    let waffles = Number(input[3]);
    let puncakes = Number(input[4]);

    let priceCake = 45;
    let priceWaffle = 5.80;
    let pricePuncake = 3.20;

    let totalPriceCakes = cakes * priceCake;
    let totalPriceWaffles = waffles * priceWaffle;
    let totalPricePuncakes = puncakes * pricePuncake;

    let totalPrice = totalPriceCakes + totalPriceWaffles + totalPricePuncakes;
    let priceFromAllChefs = chefs * totalPrice;

    let priceForAllCompany = priceFromAllChefs * days;
    let result = priceForAllCompany - (priceForAllCompany * 1/8)

    console.log(result)

}

