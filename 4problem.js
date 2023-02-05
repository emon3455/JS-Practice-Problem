function nameConversion(name1, name2){

    if(name1.length > name2.length){

        let names = [];
        for(let i=name1.length-1; i>= 0; i--){
            names.push(name1[i]);
        }

        let name = names.join("");
        return name;

    }
    
    else{

        let names = [];
        let x = 0;
        for(let i=name2.length-1; i>= 0; i--){
            names.push(name2[i]);
        }

        let name = names.join("");
        return name;

    }

}

// optional/pro way:

/* function nameConversion(name1, name2){

    if(name1.length > name2.length){
        return (name1.split("").reverse().join(""));
    }
    
    else{
        return (name2.split("").reverse().join(""));
    }

} */

let name1 = "Emon";
let name2 = "Farjana";

let result = nameConversion(name1 , name2);
console.log(result);