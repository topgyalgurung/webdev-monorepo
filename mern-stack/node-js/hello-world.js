const http = require('node:http')

const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, world\n');
})

server.listen(port, hostname, () =>{
    console.log(`Server listening at http://${hostname}:${port}`);
});