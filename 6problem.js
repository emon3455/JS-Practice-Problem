const persons = [
    {name:'sakib', age:30},
    {name:'samiul', age:20},
    {name:'sahid', age:50},
    {name:'samin', age:10}
];

function getMinAge(persons){

    let minObj = persons[0];
    for(let i = 0; i<persons.length; i++){

        if(persons[i].age < minObj.age){
            minObj = persons[i];
        }

    }

    return minObj;

}

let result = getMinAge(persons);
console.log(result);
