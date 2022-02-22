var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request,response){

if(request.url ==="/"){
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write(fs.readFileSync('SimpleProgram.js'));

    response.end('The end');
}
   
});

var port =process.env.PORT || 3000;
server.listen(port);

console.log('Server is running at http://localhost:%d', port);

