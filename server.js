// server.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();
const port = 3000;
// Set EJS as the view engine
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
// Define a route to render the file content
app.get('/', (req, res) => {
    // Read the content of the file
    fs.readFile('/projects/allScripts/test.log', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading file');
        }
        // Render the EJS template and pass the file content as a variable
        res.render('index', { fileContent: data });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
