var net = require('net');

var client = net.connect({ host: '192.168.56.1', port: 8080 }, function () {
    console.log('Connected to server!');
});

client.on('data', function (data) {
    console.log('Server says:', data.toString());
    client.end();
});

client.on('end', function () {
    console.log('Disconnected from server');
});
