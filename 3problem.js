function countMoreThenFive(aray){

    let count=0;
    for(let i =0; i< aray.length; i++){

        if(aray[i]>5){
            count++;
        }

    }

    return count;

}

const aray = [-1,2,-3,4,5,6,-7,8,-9,10,7];
let count = countMoreThenFive(aray);
console.log(count,"greater than 5 available in aray");