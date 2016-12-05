var mongoose = require('mongoose');
var Challenge = require('./challengeModel');
var User = require('../users/userModel');
var Solution = require('../solutions/solutionModel');





module.exports.getRandomChallenge = function(req, res) {
  console.log('Getting random challenge')
  let {query: {username, userId, challengeIdList}} = req;


  var checkIfUserAlreadySolved = function(userId, challenge) {
    // Returns true if the user at userId has already solved the challenge
    // or if the challengeId is is challengeIdList.
    // Otherwise, returns the challenge

    if (challengeIdList) {
      return new Promise(function(resolve, reject) {
        if (challengeIdList.indexOf(challenge.id) !== -1) {
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

    return Challenge.findOne().skip(rand)

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


  // find username
  return new Promise(function(resolve, reject) {
    if (userId === undefined && username !== undefined) {
      return User.findOne({username: username})

      .then((user) => {
        userId = user.id;
        resolve();
      });

    } else {
      resolve();
    }
  })

  .then(function() {
    return Challenge.count();
  })

  .then(function(count) {
    return findRandomChallenge(userId, count);
  })

  .then(challenge => res.send(challenge))

  .catch((err) => res.send(500));


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
    res.send(500);
  });

};
