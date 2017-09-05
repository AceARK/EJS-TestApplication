// Setting up express
var express = require('express');
var app = express();

// setting view engine
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
	var drinks = [
		{ name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
	];

	var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";
	var exclamation = "|^| The Truth |^|";

	res.render('pages/index', {
		drinks: drinks,
		tagline: tagline,
		exclamation: exclamation
	});
});

// about page
app.get('/about', function(req, res) {
	res.render('pages/about');
});

// setting port
app.listen(8080);
console.log('Listening at port 8080');