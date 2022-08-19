function sumAndSubtract(firstNum, secondNum,thirdNum){

    function sumOfTwo(fNum, sNum){
        return fNum + sNum
    }
    
    let sum = sumOfTwo(firstNum, secondNum)

    function subtract(sum, tNum){
        return sum - tNum
    }
    let result = subtract(sum,thirdNum)

    console.log(result)
}
sumAndSubtract(23,6,10)
sumAndSubtract(1,17,30)
sumAndSubtract(42,58,100)