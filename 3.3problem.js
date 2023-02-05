function oilPrice(d,p,o){
    let d1 = 114;
    let p1 = 130;
    let o1 = 135;

    return ( (d1*d) + (p1*p) + (o1*o));

}

let res = oilPrice(0,2,3);
console.log(res);
