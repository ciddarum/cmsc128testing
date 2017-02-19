var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('method-override')());
app.use(require(__dirname + '/config/router')(express.Router()));

var server = app.listen(5000, function(){
	var port = server.address().port;

	console.log('Magic happens on port %s', port);
});
