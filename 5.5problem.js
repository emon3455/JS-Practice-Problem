function isBestFriend(obj1 , obj2){

    if(obj1.name == obj2.friend && obj2.name == obj1.friend){
        return true;
    }
    return false;

}

console.log(
isBestFriend(
    
    { name: "abul", friend: "babul" },
    { name: "babul", friend: "abul" }
    
)
);