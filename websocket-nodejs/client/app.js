const socket = new WebSocket('ws://localhost:8080');

// we can use socket both listent to and send messages 
socket.onmessage = ({data}) => {
    console.log(`Message from server: ${data}`);
};

document.querySelector('button').onClick = () => {
    socket.send('Hello, server!');
}