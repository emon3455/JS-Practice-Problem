function isJavaScriptFile(fName){
    return fName.endsWith(".js");
}

let fName = "index.js";
let res  = isJavaScriptFile(fName);
console.log(res);