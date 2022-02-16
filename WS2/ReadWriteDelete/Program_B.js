var fs= require("fs");

console.log("Program Started");

//Because read file syntax is "fs.readFile(file[, options], callback)" we can use it in function AND we dont have to define data as variable!
//The Asynchronous way. The Code keeps running even when its waitinh on readfile
fs.readFile('example.txt', results);

//Notice how the results log AFTER "Program ended".
function results(err, data){
    //the line below says if error is detected. cut the code and log the error number
    if(err) return console.error(err);
    console.log("Result of fileread:");
    console.log(data.toString());
}

for (var i=0;i<15;i++){
    console.log("Node hit this loop and now this keeps on going while the file is being read...");
}

console.log("Program Ended");