const fs = require("fs")
const path = require("path")

function callback(error,content){
    console.log(content);
}

const filepath = path.join(__dirname,"a.txt")

fs.readFile(filepath,"utf-8",callback);

let s=0;
for(let i=0 ; i < 100000000 ; i++){
    s++;
}

console.log(s);

