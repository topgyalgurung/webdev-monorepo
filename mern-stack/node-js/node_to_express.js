
import http from 'http'

const server = http.createServer();
const gets = []
const posts = []

// server.get('/test', (req,res) =>(test));

server.on("request", (req,res) => {
    if(req.method === "GET"){
        gets.forEach(g => g(req,res))
    }
})
server.on("request", (req,res) => {
    if(req.method === "POST"){
        posts.forEach(g => g(req,res))
    }
})

server.get = f => gets.push(f)
server.post = f => posts.push(f)

// test get $curl -v http://[::1]:8080 // fancy same localhost
server.get((req,res)=>res.write('Received your GET1\n'));
server.get((req,res)=>res.end('Received your GET2\n'));
// test post $curl -X POST http://localhost:8080
server.post((req,res)=>res.write('Received your POST1\n'));
server.post((req,res)=>res.end('Received your POST2\n'));

server.listen(8080);
