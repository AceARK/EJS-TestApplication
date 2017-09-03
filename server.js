// Setting up express
var express = require('express');
var app = express();

// setting view engine
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
	res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
	res.render('pages/about');
});

// setting port
app.listen(8080);
console.log('Listening at port 8080');