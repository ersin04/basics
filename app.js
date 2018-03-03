const http = require('http'); // lade Modul http

const hostname = '127.0.0.1'; //localhost

const port = 3000; 

const server = http.createServer((req,res) =>{

    res.statusCode = 200; // ist ok 
    res.setHeader('Content-Type', 'text/plain'); //wir liefern string zurück = plain text
    res.end('Hello World\n');

});

server.listen(port, hostname, () =>{

    console.log(`Server running at http://${hostname}:${port}/`)

});