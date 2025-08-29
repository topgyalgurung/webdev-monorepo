import http from 'http'

const server = http.createServer();

// request chaining 
// how express works when it comes to middleware
// server.on("request", (req,res) => req.value = 1);
// server.on("request", (req,res) => console.log(req.value + " "+ 2));
// server.on("request", (req,res) => console.log(3));

// server.on("request", (req,res) => {
//     console.log("writableHighWaterMark" + res.writableHighWaterMark);
// });
// 16,384 bytes reach this, auto flush it 

// writing and end the stream
// server.on("request", (req,res) => {res.write("1"); res.end()});
server.on("request", (req,res) => res.write("1"));
server.on("request", (req,res) => res.write("2"));
server.on("request", (req,res) => res.write("3"));
server.on("request", (req,res) => res.end("THISISEND"));

// write does not send responses to the client 

server.listen(8080);
console.log("listening ...")
