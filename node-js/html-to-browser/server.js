const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// node send tml to browser
// basic routing 
// status code
// redirect 

// status code: 200 -ok, 301-resource moved, 404 not found, 500 - internal server error

const server = http.createServer((req,res) => {

    // console.log(req.url, req.method);

    const num = _.random(0,20);
    console.log(num);
    
    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // simple routing system
    let path = "./views/";
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case'/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
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