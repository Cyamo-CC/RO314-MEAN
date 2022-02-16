var fs= require("fs");

fs.unlink('result.txt',(err)=>{
    if (err) console.error(err);
    console.log('Deleted');
});