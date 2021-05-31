const http = require('http');
var dt = require('./myfirstmodule');

const hostname = 'localhost';
const port = 8080;

const server =
    http.createServer((req, res) => {
        console.log(req.headers);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write("The date and time are currently: "  + dt.myDateTime());
    })

server
    .listen(port)
