var http = require('http');
var port = process.env.PORT || 8080;        
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello Heroku, I am Steve Nabors!!!');
});
server.listen(port);
