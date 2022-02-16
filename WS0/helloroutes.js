var http= require("http");
var server= http.createServer(function(request,response){
    //If the pahe is index page
    if(request.url ==="/"){
    response.writeHead(200,{'Content-type': `text/html`});
        response.write("<h1>Success</h1>")


    response.end();
    }
});

var port= process.env.PORT || 3000;
server.listen(port);

console.log('Server is running at http://localhost:%d', port);