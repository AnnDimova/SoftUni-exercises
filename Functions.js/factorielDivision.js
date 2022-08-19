function factorialDivision(firstNumber, secondNumber){

    function factorial(number){
        if(number === 0){
            return 1
        }
        else return number * factorial(number - 1)
    }

    let result = ((factorial(firstNumber)) / factorial(secondNumber)).toFixed(2)

    console.log(result)
}
factorialDivision(5,2)
factorialDivision(6,2)