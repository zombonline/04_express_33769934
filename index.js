// Import the express module and create an express application
const express = require('express');
const app = express();

// Define the port number
const port = 8000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Load the main route handlers
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Node Server is running on http://localhost:${port}`);
});