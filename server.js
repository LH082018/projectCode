// require() (import) the express module and create an express application
const express = require('express');
const app = express();

// The path module provides functionality to access and interact with the file system
const path = require('path');


// points to the public folder for static files
app.use(express.static('public'));

/* The express.urlencoded() function is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
if post request comes in html form or json */
app.use(express.urlencoded({extended:false}))
app.use(express.json())

/* app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root. The callback function takes a request and a response object as arguments.
get request to the root url which points to the index.html page */
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

// Connection to database
const db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user : 'LmH80',
    password : '',
    database : 'joinus_db'
  },
});

app.post('/join', (req, res) => {
	const first = req.params.first;
  const last = req.params.last;
  const about = req.params.about;
  const email = req.params.email;
  	// const text = req.params.text;
    db('users').insert({
        first_name: first,
        last_name:last,
        email:email,
        about:about,
        joined:new Date()
    }).then(console.log(first))
    res.redirect('/')
});

// starts up the server on a specified port ('3000') localhost:3000 in browser 
app.listen(3002);
