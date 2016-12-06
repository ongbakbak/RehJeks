var mongoose = require('mongoose');
var Challenge = require('./challengeModel');
var User = require('../users/userModel');
var Solution = require('../solutions/solutionModel');

module.exports.getChallenges = function(req, res) {

  let {query: {quantity = 5, difficulty, order}} = req;


  Challenge.find(difficulty?{difficulty: difficulty}:undefined)
  .limit(+quantity) // Note: quantity comes in from params as a string, Mongoose needs it as a number
  .then(data => res.send(data));
};

module.exports.getSingleChallenge = function(req, res) {
  // Serve up a single challenge in this order of priority:
    // If challengeId given in params, fetch that challenge
    // If difficulty given, select only challenges with the given difficulty:
      // If array of solved challenges given in params for a user who is not signed in (solvedChallenges),
        // Serve up a random challenge whose id is not contained in that array
      // If username or userId given in params
        // Serve up a random challenge not already solved by the user

  let {query: {username, userId, difficulty, solvedChallenges, challengeId}} = req;
  console.log('username', username);
  console.log('userId', userId);
  // if specific challenge requested by Id, serve it
  if (challengeId) {
    return Challenge.findOne({id: challengeId})
    .then(challenge => res.send(challenge))
    .catch(err => res.statusCode(500).send(err));
  }


  var checkIfUserAlreadySolved = function(userId, challenge) {
    // Returns true if the user at userId has already solved the challenge
    // or if the challengeId is is challengeIdList.
    // Otherwise, returns the challenge

    if (solvedChallenges) {
      return new Promise(function(resolve, reject) {
        if (solvedChallenges.indexOf(challenge.id) !== -1) {
          resolve(true);
        } else {
          resolve(challenge);
        }
      });
    }

    return Solution.findOne({userId: userId, challengeId: challenge.id})

    .then(function(solution) {
      if (solution) {
        return true;
      } else {
        return challenge;
      }
    });

  }

  var findRandomChallenge = function(userId, count) {
    // Finds a random challenge that the user at userId hasn't already solved

    let rand = parseInt(Math.random() * count);

    return Challenge.findOne(difficulty?{difficulty: difficulty}:undefined).skip(rand)

    .then(function(challenge) {
      return checkIfUserAlreadySolved(userId, challenge)
    })

    .then(function(challengeOrSolved) {
      if (challengeOrSolved === true) {
        return findRandomChallenge(userId, count);
      } else {
        return challengeOrSolved;
      }
    })
    .catch((err)=>console.log('Database Error on finding challenge:', err));
  };


  // find userId given username
  return new Promise(function(resolve, reject) {
    if (userId === undefined && username !== undefined) {
      return User.findOne({username: username})

      .then((user) => {
        if (user) userId = user.id;
        resolve();
      })
      .catch((err) => reject(err));

    } else {
      resolve();
    }
  })
  // Count challenges to select our random seed
  .then(function() {
    return Challenge.count(difficulty?{difficulty: difficulty}:undefined);
  })
  // Find the challenge given the count of challenges
  .then(function(count) {
    return findRandomChallenge(userId, count);
  })
  // Serve the challenge
  .then(challenge => res.send(challenge))

  .catch((err) => res.statusCode(500).send('Unknown Error serving challenge'));

};

module.exports.submitNewChallenge = function(req, res) {
  console.log('Submiting new challenge')

  newChallenge = new Challenge(req.body);
  newChallenge.save()
  .then(function(data) {
    res.send(200);
  })
  .catch(function(err) {
    console.log('error while submitting a new challenge:', err)
    res.statusCode(500).send(err);
  });

};
