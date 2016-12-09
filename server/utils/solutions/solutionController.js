var mongoose = require('mongoose');
var Solution = require('./solutionModel');
var User = require('../users/userModel');

module.exports.getOtherSolutions = function(req, res) {
  // Will return a list of solutions, quantity limit given by "quantity"
  // Either provide a challengeId and it will return solutions for the challenge
  // Or provide a username/userId and a list of the user's solutions will be sent.

  let {query: {username, userId, challengeId, quantity = 10}} = req;

  if (challengeId) {

    Solution.find({challengeId: challengeId}).limit(+quantity)
    .then(data => res.send(data))
    .catch(err => { res.sendStatus(500); console.log(err); });

  } else {

    User.findOne(userId ? {id: userId} : {username: username})
    .then(user => Solution.find({userId: user ? user.id : "undefined"}).limit(+quantity))
    .then(data => res.send(data))
    .catch(err => { res.sendStatus(500); console.log(err); });

  }
};

module.exports.addUserSolution = function(req, res) {
  // Adds a (correct) solution to the database.
  console.log('req.body is ____', req.body);

  Solution.create(req.body)
  .then(data => console.log(data))
  .then(something => res.send(200))
  .catch(err => { res.sendStatus(500); console.log(err); });

};

