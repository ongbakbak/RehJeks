var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var stub = require('./utils/databaseStub');

var db = mongoose.connect('mongodb://127.0.0.1:27017/rehjeks');

stub(db);



var app = express();

app.use(bodyparser.json());

require('./utils/routes.js')(app, express);

app.use(express.static(__dirname + './../client'));

app.listen(8000);
console.log("Listening on 127.0.0.1:8000");
