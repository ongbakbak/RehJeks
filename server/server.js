var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var stub = require('./utils/databaseStub');
var routes = require('./utils/routes.js');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');


var db = mongoose.connect('mongodb://127.0.0.1:27017/rehjeks');


//stub(db);



var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(expressSession({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//passport config
var user = require('./utils/users/userModel.js');
passport.use(new localStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());


routes(app, express);

app.use(express.static(__dirname + './../client'));

app.listen(8000);
console.log('Listening on 127.0.0.1:8000');

