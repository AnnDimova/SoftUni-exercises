function averageValue(arr){

let sum = 0;

for(let i = 0; i < arr.length; i++){
    let num = Number(arr[i]);
    sum += num;
}
let averageVal = sum / arr.length;

console.log(averageVal);

}

averageValue([1, 2, 3, 4, 5]);