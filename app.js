var express = require('express');
var app = express();

app.use('/', express.static('webRoot'))

app.listen(8080, function() {
    console.log('http://localhost:8080/');
});