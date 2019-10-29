var express = require('express');
var app = express();

app.get('/', function (req,res) {
	res.send('hello again world');
});


app.listen(process.env.PORT || 3000);

module.exports = app;
