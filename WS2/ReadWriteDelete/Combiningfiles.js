var fs= require ("fs");
//I dcould not figure out how to use 'readfiles.js' here but this works
//const data = new Uint8Array(Buffer.from('Hello Node.js'));
//so const data = new Uint8Array (Buffer.from(fs.readFileSync('example.txt') + '\n'+ fs.readFileSync('second.txt'))); worked too
// The Buffer class is a global type for dealing with binary data directly. It can be constructed in a variety of ways.
//nee dto do more reading on buffers
var data = fs.readFileSync('example.txt') + '\n'+ fs.readFileSync('second.txt');

//I have no idea how to write BEFORE this at this moment..This overwrites whatever was befre
fs.writeFile('result.txt', data, (err) =>{
    if (err) return console.error(err);
});

//I tried fs.appendFileSync(path, data[, options]) But it always failed because Sync
//The synchronous APIs perform all operations synchronously, blocking the event loop until the operation completes or fails.
// The append had to be written without the sync or it would get ower written by writeFile
// to use multiple write files in
fs.appendFile ('result.txt', 'I wrote this!', more);
function more(err){
if (err) return console.error(err);
console.log('appended!');}

console.log('Program executed!');
//Writefile will create the file if it does not already exist.