function maxNumber(array) {
    let newArray = [];
    function checkMax(array, n) {
        for (let i = 0; i <= array.length; i++) {
            if (array[array.length - 1] <= n) {
                array.pop()
            } else {
                return array.push(n)
            }
        }
        return array.push(n)
    }
    for (const n of array) {
        checkMax(newArray, n)
    }
    console.log(newArray.join(" "))
}
maxNumber([ 41, 41, 34, 20 ]);
