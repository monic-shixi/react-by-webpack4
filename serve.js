const express = require('express');
const path = require('path');
const app = express();
/**
 * Listener port for the application.
 *
 * @type {number}
 */
const port = 8088;

// Add a handler to inspect the req.secure flag (see 
// http://expressjs.com/api#req.secure). This allows us 
// to know whether the request was via http or https.

app.enable('trust proxy');

// Add a handler to inspect the req.secure flag (see 
// http://expressjs.com/api#req.secure). This allows us 
// to know whether the request was via http or https.
app.use(function (req, res, next) {
  if (req.path.startsWith('/') && (req.path !== '/service_worker.js')) {
    res.set('Cache-Control', 'max-age=86400');
  }
  if (req.secure) {
    // request was via https, so do no special handling
    next();
  } else {
    next();
    // request was via http, so redirect to https
    // res.redirect('https://' + req.headers.host + req.url);
  }
});

// Allow static files in the /public directory to be served
app.use(express.static(__dirname + '/build'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start listening on the port
var server = app.listen(port, function () {
  console.log('Listening on port %d', server.address().port);
});
