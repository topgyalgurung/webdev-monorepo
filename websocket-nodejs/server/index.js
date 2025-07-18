// using socket.io

// create http server 
// more popular you can use express.js here instead 
const http = require('http').createServer();
const io = require('socket.io')(http,{
    cors:{origin:'*'} // allow all origins
})

// event based system 



/*
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {

    socket.on('message', (message) => {

        socket.send(`Roger that: ${message}`);
    }); 
});
*/