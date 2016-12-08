var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var stub = require('./utils/databaseStub');
var routes = require('./utils/routes.js');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var db = mongoose.connect('mongodb://127.0.0.1:27017/rehjeks');


//stub(db);

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

//passport config
var User = require('./utils/users/userModel');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

routes(app, express);

app.use(express.static(__dirname + './../client'));

app.listen(8000);
console.log('Listening on 127.0.0.1:8000');
