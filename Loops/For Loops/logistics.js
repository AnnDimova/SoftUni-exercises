function logistics(input){

    let inputL = input.length;

    let tonesForMicrobus = 0;
    let tonesForKamion = 0;
    let tonesForTrain = 0;
    let totalTones = 0

    for(let i = 1; i < inputL; i++){
        let tones = Number(input[i]);
        totalTones += tones;

        if(tones <= 3){
            tonesForMicrobus += tones
        } else if(tones >= 4 && tones <= 11){
            tonesForKamion += tones
        } else if(tones >= 12){
            tonesForTrain += tones
        }
    }

    let totalAvaragePrice = (tonesForMicrobus * 200 + tonesForKamion * 175 + tonesForTrain * 120) / totalTones;
    let percentMicrobus = tonesForMicrobus/totalTones * 100; 
    let percentKamion = tonesForKamion/totalTones * 100; 
    let percentTrain = tonesForTrain/totalTones * 100; 

    console.log(`${totalAvaragePrice.toFixed(2)}`)
    console.log(`${percentMicrobus.toFixed(2)}%`)
    console.log(`${percentKamion.toFixed(2)}%`)
    console.log(`${percentTrain.toFixed(2)}%`)


}
logistics(['5','2','10','20','1','7'])