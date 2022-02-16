var fs=require("fs");

fs.readFile('example.txt',result);
fs.readFile('second.txt',another);

function result(err, data){
    if(err) return console.error(err);
    console.log(data.toString());
}
function another(err, data){
    if(err) return console.error(err);
    console.log(data.toString());
}