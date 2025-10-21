// Create a new router
const express = require("express");
const router = express.Router();

//import the fs module to read files
const fs = require('fs');

//Handle the routes (home, about, contact, date, etc.)
router.get('/', (req, res) => { res.send('Hello World!'); });

router.get('/about', (req, res) => { res.send('This is the About page.'); });

router.get('/contact', (req, res) => { res.send('Contact me via email: bjone001@gold.ac.uk.'); });

router.get('/date', (req, res) => {
    const currentDate = new Date();
    res.send(`Current date and time is: ${currentDate}`);
});

router.get('/welcome/:username', (req, res) => {
    console.log(req.params);
    const username = req.params.username;
    res.send(`Welcome, ${username}!`);
});

router.get('/chain', (req, res, next) => {
    console.log('First handler');
    next();
}, (req, res) => {
    console.log('Second handler');
    res.send('Response from the second handler');
});

router.get('/a', (req, res) => {
    fs.readFile('./routes/a.html', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading file');
        } else {
            res.send(data);
        }
    });
});


// Export the router object so index.js can access it
module.exports = router;
