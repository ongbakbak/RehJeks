var mongoose = require('mongoose');
var User = require('./userModel');
var Solution = require('../solutions/solutionModel');

module.exports.getSolvedChallenges = function(req, res, next) {
  // Send username via request from front end to get userID
  var user = req.query.username;
  
  User.findOne({username: user})
  .then(function(user) {
    Solution.find({userId: user.id})
    .then(function(solutions) {
      if(solutions){
        console.log("got solutions");
        res.json(solutions);
      }
      else{
        next(new Error("user does not have any solutions to display"));
      }
    })
  })
};

module.exports.signup = function(req, res, next) {
  var { body: {username, password} } = req

  User.findOne({username: username})
  .then(function(user) {
    if(user) {
      next(new Error("username already exists"));
    }
    else {
      User.create({
        username: username, 
        password: password
      })
      .then(function(newUser) {
        //send token here
        res.json({username: newUser.username, userid: newUser.id});
      })
    }
  })
};

module.exports.login = function(req, res, next) {
  var { body: {username, password} } = req

  User.findOne({username: username})
    .then(function(user){
    	if(user){
    		if(user.pw === password){
          //send token here
          console.log("successfully logged in");
          res.json({username: user.username, userid: user.id});
    		}
        else {
          next(new Error("password is incorrect"));
        }
    	}
    	else {
    		next(new Error('user does not exist'));
    	}
    })
  };

module.exports.comparePassword = function() {
  // fill this in when decide to encrypt password with bcrypt
  // use bcrypt compare method
};

