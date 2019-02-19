var http = require('http');

// just some changes

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello Travis, it's me!!\n");
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');