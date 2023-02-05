function radianToDegree(radian){
    let res = radian * 57.2957795;
    res = res.toFixed(2);

    return parseFloat(res);
}

let num =199;
let res = radianToDegree(num);
console.log(res);