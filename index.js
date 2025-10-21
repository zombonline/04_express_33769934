//import the express module and create an express application
const express = require('express');
const app = express();
//Define the port number
const port = 8000;

//load the main route handlers
const mainRoutes = require('./routes/main');
app.use('/', mainRoutes);

// Start listening for HTTP requests
app.listen(port, () => {
    console.log(`Node Server is running on http://localhost:${port}`);
});