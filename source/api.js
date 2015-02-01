/**
 * Created by Vinícius on 01/02/2015.
 */
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\nRodando Node.js embaixo de um NGINX.\n\nMarreteiro 4ever <3');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000');