function stockMarket(arg1, arg2, arg3, arg4){

    let priceForVegetable = parseFloat(arg1);
    let priceForFruits = parseFloat(arg2);
    let kilosVegetables = parseInt(arg3);
    let kilosFruits = parseInt(arg4);

    let totalPriceForVegetables = priceForVegetable * kilosVegetables;
    let totalPriceForFruits = priceForFruits * kilosFruits;

    let totalProfit = totalPriceForVegetables + totalPriceForFruits;

    let profitInEuro = (totalProfit / 1.94)

    console.log(profitInEuro)
   
}
