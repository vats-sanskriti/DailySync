const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000; // You can change the port

// Middleware
app.use(cors()); // Allows clients from different origins
app.use(express.json()); // Parses JSON data

// Sample API endpoint
app.get('/', (req, res) => {
    res.send('Hello from Express Server!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
