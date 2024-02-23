// server.js
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route to render the file content
app.get('/', (req, res) => {
    // Read the content of the file
    fs.readFile('./test.log', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading file');
        }
        // Render the EJS template and pass the file content as a variable
        res.render('index', { fileContent: data });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
