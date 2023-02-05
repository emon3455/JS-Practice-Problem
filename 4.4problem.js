function publicBusFare(person){

    let pubBusfee = 250;

    let bbr = person % 50;

    let mbr = bbr % 11;

    let res = pubBusfee * mbr

    return res;
}


let res = publicBusFare(365);
console.log(res);
