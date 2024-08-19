const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// Sample endpoint
app.get('/data', (req, res) => {
    const sampleData = { message: 'Hi This is Charishma from the backend!' };
    res.json(sampleData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});