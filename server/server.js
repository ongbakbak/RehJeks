var express = require('express');
var bodyparser = require('body-parser');
// require in routes
// requre in database ??? Or can modulize elsewhere

var app = express();

require('./utils/routes.js')(app, express);

app.use(bodyparser.json());
app.use(express.static('/../client'));

app.listen(8000);
console.log("Listening on 127.0.0.1:8000");
