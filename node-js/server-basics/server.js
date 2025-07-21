const http = require('http');

const server = http.createServer((req,res) => {
    console.log('request made') // code running in server not browser, will show in terminal instead of browser console log
    // console.log(req)
    console.log(req.url, req.method);

    // res.setHeader('Content-Type', 'application/text');
    
    // now to send back html instead of text
    res.setHeader('Content-Type', 'text/html');

    // res.write('Hello, people');
    res.write('<head> <link rel="stylesheet" href="#"> <head/>');
    res.write('<p> Hello world </p>')
    res.write('<p> Hello world, again </p>')
    
    // above look quite messy now 
    // should be in separate html file and then node could read those files and send to browser

    res.end()

})

server.listen(3000, 'localhost',() => { // 127.0.0.1
    console.log('listening for request on port 3000')
}) // function fires when server listen