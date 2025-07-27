// The goal is to understand that:
//   - Networking has a language agnostic set of standars: IP Adresses, Requests, Responses etc
//   - NodeJS gives us the tools needed to build a server which would talk to a client
// 3. Experiment with a basic, barebones server. Don't worry you won't break anything!

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
    // and make use of file system again 

    res.end()

})

server.listen(3000, 'localhost',() => { // 127.0.0.1
    console.log('listening for request on port 3000')
}) // function fires when server listen