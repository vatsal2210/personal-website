var server = require('http');
var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const helmet = require("helmet");
const path = require("path");

var path = __dirname + '/views/';
app.use(express.static(__dirname + '/views/'));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(__dirname, '/public/'));

app.use('/', routes);

app.listen(app.get('port'), function(){
	console.log('\nDD-MM-YY : hh:mm:ss'.timestamp, ': Start listening on Port '+ app.get('port') );
});