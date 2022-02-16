var fs= require("fs");

fs.readdir('.',lue);

function lue(err,files){
    if(err) return console.error(err);
    console.log(files);
}