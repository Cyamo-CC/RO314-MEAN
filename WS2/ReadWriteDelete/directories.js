var fs= require("fs");

//---------CREATING------------
//creating folder"newdata" 
fs.mkdirSync('/My stuff/Tiedostot/Information väylä opinnot/kurssit/3. kevät/FullStack/RO314 MEAN/WS2/ReadWriteDelete/newdata',(err) => {
    if(err) throw err;
    console.error(err);
    console.log('created!');
});

/* Next task ist to repeat "combiningfiles.js", but since Im not happy with it going 
to play around with writing streams */
var myStream= fs.createWriteStream('newdata/streamresult.txt');
myStream.write(fs.readFileSync('example.txt')+'\n');
myStream.write(fs.readFileSync('second.txt')+'\n');
myStream.write('test3');



//---------DELETING---------------
//folder needs to be empty so it can be deleted
/* fs.unlink('newdata/streamresult.txt',(err)=>{
    if (err) console.error(err);
    console.log('Deleted contents');
}); */

//deleting folder "newdata"
/* fs.rmdir('/My stuff/Tiedostot/Information väylä opinnot/kurssit/3. kevät/FullStack/RO314 MEAN/WS2/newdata',(err) => {
    if(err) throw err;
    console.error(err);
    console.log('Deleted directory');
});  */