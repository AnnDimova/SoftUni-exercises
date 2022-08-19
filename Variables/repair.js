function repair(arg1, arg2, arg3, arg4, arg5){

    let n = parseInt(arg1);
    let w = parseFloat(arg2);
    let l = parseFloat(arg3);
    let m = parseInt(arg4);
    let o = parseInt(arg5);
    let time = 0.2;

    let area = n * n;
    let areaBench = m * o;
    let areaForRepair = area - areaBench;

    let areaTile = w * l;
    let result = areaForRepair / areaTile;

    let finalResult = result * time;

    console.log(result);
    console.log(finalResult);

}