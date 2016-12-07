
var userController = require('./users/userController.js');
var challengeController = require('./challenges/challengeController.js');
var solutionController = require('./solutions/solutionController.js');
var passport = require('passport');

module.exports = function (app, express) {
  ////////////////
  // GET REQUESTS
  ////////////////
  app.get('/challenge', challengeController.getSingleChallenge);

  app.get('/challenges', challengeController.getChallenges);

  app.get('/solution', solutionController.getOtherSolutions);

  app.get('/user', userController.getSolvedChallenges);

  ////////////////
  // POST REQUESTS
  ////////////////

  app.post('/signup', userController.signup);

  app.post('/login', passport.authenticate('local'), function(req, res) {
    res.send(200);
  });

  app.post('/solution', solutionController.addUserSolution);

  app.post('/challenge', challengeController.submitNewChallenge);

};
