var http = require("http");

var server = http.createServer(function(request,response){

if(request.url ==="/"){
    response.writeHead(200,{'Content-Type': 'text/plain'});
  
    response.end('Hello from firs home page!');
}
if (request.url ==="/own"){
    //or response.setHeader('Content-Type':'text/HTML; charset=utf-8');
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.write ("<head><meta charset="+`"UTF-8"`+"> <style> tr{border: 2px solid black; border-collapse: collapse; padding: 15px;} th {border: 2px solid black; border-collapse: collapse; padding: 15px;} table {border: 2px solid black; border-collapse: collapse; padding: 15px;}</style></head>")
    response.write("<h1>Own page heading</h1>");
    var link = "http://localhost:3000"
    var headers = "<tr><th>Name</th> <th>Adress</th> <th>City</th></tr>"
    var rivi1 = "<tr><th>Matti Meikäläinen</th> <th>Timotie 1, as 10</th> <th>Tampere</th></tr>"
    var rivi2 = "<tr> <th><a href=`"+link+"`>"+"Maija Vietanen</a></th> <th>Asematie 12</th> <th>Kiljava</th></tr>"
    
    response.write("<table>"+headers+rivi1+ rivi2+"</table>"); 

    response.end("<p>Hello from own page</p>");
}
   
});

var port =process.env.PORT || 3000;
server.listen(port);

console.log('Server is running at http://localhost:%d', port);

