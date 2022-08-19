function depositCalculator(input){

    let depositAmount = Number(input[0]);
    let depositTerm = Number(input[1]);
    let interastRate = Number(input[2]);

    let interest = depositAmount * (interastRate / 100);
    let interestPerMonth = (interest / 12).toFixed(2);

    let profit = depositAmount + (depositTerm * interestPerMonth)

    console.log(profit.toFixed(2))

}