var fs= require("fs");

console.log("Program started");
//Because .readFIleSync syntax is "fs.readFileSync(file[, options])" the var = Data has to be given. UNLIKE "fs.readFile(file[, options], callback)" it can not be made into callback function 
//synchronous way (Sync) blocks the Node.js event loop and further JavaScript execution until the operation is complete. 
// Exceptions are thrown immediately and can be handled using try…catch, or can be allowed to bubble up.
var data = fs.readFileSync('example.txt');
console.log(data.toString());

for (var i=0; i<15; i++){
    console.log("Node hit this loop and now this keeps on going while the file is being read...");
}

console.log("Program Ended");