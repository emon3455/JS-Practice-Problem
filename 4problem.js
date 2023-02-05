function nameConversion(name1, name2){

    if(name1.length > name2.length){

        let names = [];
        let x = 0;
        for(let i=name1.length-1; i>= 0; i--){
            names[x]= name1[i];
            x++;
        }

        let name = names.join("");
        return name;

    }
    
    else{

        let names = [];
        let x = 0;
        for(let i=name2.length-1; i>= 0; i--){
            names[x]= name2[i];
            x++;
        }

        let name = names.join("");
        return name;
        
    }

}

let name1 = "Emon";
let name2 = "Farjana";

let result = nameConversion(name1 , name2);
console.log(result);