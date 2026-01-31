// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
const path = require("path");

const filepath = path.join(__dirname,"a.txt");

function callback(error){
    if(error){
        console.error("ERROR");
        return;
    }
    console.log("Written to file successfully");
}

fs.appendFile(filepath,"Hello JS","utf-8",callback);