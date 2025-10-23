// Create a new router
const express = require("express");
const router = express.Router();

//import the fs module to read files
const fs = require('fs');

//Handle the routes (home, about, contact with simple text responses)
router.get('/', (req, res) => { res.send('Hello World!'); });
router.get('/about', (req, res) => { res.send('This is the About page.'); });
router.get('/contact', (req, res) => { res.send('Contact me via email: bjone001@gold.ac.uk.'); });

// Handle route with URL parameter 
router.get('/welcome/:username', (req, res) => {
    console.log(req.params);
    const username = req.params.username;
    res.send(`Welcome, ${username}!`);
});

// Handle route with chained middleware functions
router.get('/chain', (req, res, next) => {
    console.log('First handler (doing a bit of work before passing to next)');
    next();
}, (req, res) => {
    console.log('Second handler (work done, sending response)');
    res.send('Response from the second handler');
});

// Serve the date.html file for the /date route
router.get('/date', (req, res) => {
    res.sendFile('public/date.html', { root: '.' });
});

// Serve the a.html file for the /file route
router.get('/file', (req, res) => {
    res.sendFile('public/a.html', { root: '.' });
});

// Export the router object so index.js can access it
module.exports = router;
