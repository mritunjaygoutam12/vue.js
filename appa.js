var express = require('express');
var app = express.createServer();

app.use(express.staticProvider(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index.html');
});

var mohit="singh"
app.listen(8080, '127.0.0.1')