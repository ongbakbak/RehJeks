var mongoose = require('mongoose');
var User = require('./userModel');

module.exports.getSolvedChallenges = function() {
  console.log('getSolvedChallenges')
  
};


module.exports.signup = function(req, res) {
  console.log('Server got POST @ /signup');
  console.log("req.body = ", req.body);


};

module.exports.login = function() {
  console.log('login')

};
