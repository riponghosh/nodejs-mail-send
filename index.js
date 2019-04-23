var express = require('express');
var app = express();


app.get('/', function (req, res) {
	res.send('hello world');
});


app.listen(3000, () => {
	console.log("Server is up and listering on 3000");
});
