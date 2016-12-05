var mongoose = require('mongoose');
var User = require('./userModel');

module.exports.getSolvedChallenges = function() {
  console.log('getSolvedChallenges')
 	
};


module.exports.signup = function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password; 

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
      //send token here
      res.send(201);
    }
  })

};

module.exports.login = function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username: username})
    .then(function(user){
    	if(user){
    		if(user.pw === password){
          //send token here
          res.send(200);
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


// check if user in database can login

