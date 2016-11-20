var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var path = require('path');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
    return res.sendFile('index.html');
});

app.listen(8000, function() {
    console.log('walking dead running on port 8000!');
});
