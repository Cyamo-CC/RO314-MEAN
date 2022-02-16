var http= require("http");
var fs = require("fs");
var server= http.createServer(function(request,response){
    //If the pahe is index page
    if(request.url ==="/"){
    response.writeHead(200,{'Content-type': `text/html`});
        response.write("<h1>Nothing to see here</h1>")


    response.end();
    }
    if(request.url ==="/frontpage"){
        response.writeHead(200,{'Content-type': `text/html`});
            response.write(fs.readFileSync('mmN3YtKK.html'));
    
    
        response.end();
        }
    if(request.url ==="/contact"){
        response.writeHead(200,{'Content-type': `text/html`});
        response.write(fs.readFileSync('fH6UBa4g.html'));
    
    
        response.end();
        }
    if(request.url ==="/plaintext"){
        response.writeHead(200,{'Content-type': `text/plain; charset=utf-8`});
            response.write(fs.readFileSync('test.txt'));
        
        
        response.end();
        }
    if(request.url ==="/json"){
         response.writeHead(200,{'Content-type': `application/json`});
         response.write(fs.readFileSync('sampledata.json'));
        
        response.end();
        }
});

var port= process.env.PORT || 3000;
server.listen(port);

console.log('Server is running at http://localhost:%d', port);