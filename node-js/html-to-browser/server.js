const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {

    console.log(req.url, req.method);
    
    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // simple routing system
    let path = "./views/";
    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case'/about':
            path += 'about.html'
            break;
        default:
            path += '404.html';
            break;

    }

    // fs.readFile('./views/index.html', (err, data) =>{
    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data); // write for multiple thing
            res.end(data); // if we send one thing we can send directly to end
        }
    })
})

server.listen(3000, 'localhost',() => { // 127.0.0.1
    console.log('listening for request on port 3000')
}) 