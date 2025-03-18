const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected:', socket.remoteAddress);

    // Send data to the client
    socket.write('Hello Rahul');

    // Receive data from the client
    socket.on('data', (data) => {
        console.log('Received from client:', data.toString());
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

// Listen on a specific port and IP address
const PORT = 8080;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
