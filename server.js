const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/public')));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

const port = process.env.OPENSHIFT_NODEJS_PORT || 5000;
const address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
app.listen(port, address);

console.log('App is listening on port ' + port);