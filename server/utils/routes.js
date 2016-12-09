
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

  app.get('/logout', userController.logout);

  ////////////////
  // POST REQUESTS
  ////////////////

  app.post('/signup', userController.signup);

  app.post('/login', passport.authenticate('local'), function(req, res){
    res.json({message: 'Success', username: req.user.username, userid: req.user.id});
  });

  app.post('/solution', solutionController.addUserSolution);

  app.post('/challenge', challengeController.submitNewChallenge);

};
