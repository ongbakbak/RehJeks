var mongoose = require('mongoose');
var User = require('./users/userModel');
var Challenge = require('./challenges/challengeModel');
var Solution = require('./solutions/solutionModel');

module.exports = function(db) {

  User.collection.drop();
  Challenge.collection.drop();
  Solution.collection.drop();


  var user1 = new User({
    id: 1,
    username: "user1",
    pw: "pw1"
  })

  var user2 = new User({
    id: 2,
    username: "user2",
    pw: "pw2"
  })

  var challenge1 = new Challenge({
    id: 1,
    userId: 1,
    title: 'challenge number 1',
    prompt: 'be challenged, breaux',
    text: 'abcdef',
    difficulty: 'mega hard',
    expected: ['a'],
    answer: '^\\w',
    cheats: ['something']
  });

  var challenge2 = new Challenge({
    id: 2,
    userId: 2,
    title: 'challenge number 2',
    prompt: 'be super challenged, breaux',
    text: 'abcdef',
    difficulty: 'mega hard',
    expected: ['a'],
    answer: '^\\w',
    cheats: ['something']
  });

  var solution1 = new Solution({
    userId: user1.id,
    challangeId: challenge1.id,
    solution: "123",
    timeToSubmit: "3 hours"
  })

  var solution2 = new Solution({
    userId: user2.id,
    challangeId: challenge2.id,
    solution: "123",
    timeToSubmit: "3 hours"
  })


  user1.save();
  user2.save();
  solution1.save();
  solution2.save();
  challenge1.save();
  challenge2.save();

};
