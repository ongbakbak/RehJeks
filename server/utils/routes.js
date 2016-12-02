
var userController = require('/users/userController.js');
var challengeController = require('/challenges/challengeController.js');
var solutionController = require('/solutions/solutionsController.js');


module.exports = function (app, express ){
  ////////////////
  // GET REQUESTS
  ////////////////

  app.get('/', function(req, res) {
    //is this a route?
    res.send("Sorry");
    //fix me
  });

  app.get('/challenge', challengeController.getRandomChallenge );

  app.get('/solution', solutionController.getOtherSolutions );

  app.get('/user', userController.getSolvedChallenges );

  ////////////////
  // POST REQUESTS
  ////////////////

  app.post('/signup', userController.signUp );

  app.post('/login', userController.login);

  app.post('/solution', solutionController.addUserSolution );

  app.post('/challenge', challengeController.submitNewChallenge );

}