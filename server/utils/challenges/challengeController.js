var mongoose = require('mongoose');
var Challenge = require('./challengeModel');

module.exports.getRandomChallenge = function(req, res) {
  console.log("Server looking for Random Challenge");

  console.log("req.query = ", req.query);

  res.send("beep boop New Challenge Data 00111010100");

};

module.exports.submitNewChallenge = function() {
  console.log('submitNewChallenge')

};


module.exports.getAllChallenges = function(req, res){
  console.log('Server trying to get all challenges from Database');
  res.send("server working, beep-boop");
};