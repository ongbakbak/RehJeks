angular.module('rehjeks.solve', [])
.controller('SolveController', function($scope, $interval, Server) {

  ////////////////////////
  // Internal variables
  // & functions
  ////////////////////////

  var regexBody = /[^\/].*(?=\/[gim]{0,3}$)/;
  var regexFlags = /[gim]{0,3}$/;
  var challStartTime = new Date();


  var updateTimer = function(startTime) {
    var now = new Date();
    var secondsElapsed = Math.floor( (now - startTime) / 1000 );
    $scope.seconds = secondsElapsed % 60;
    $scope.minutes = Math.floor(secondsElapsed / 60);
  };

  ////////////////////////
  // $scope variables
  ////////////////////////

  $scope.RegexValid;
  $scope.attempt;
  $scope.challengeData = {};
  $scope.seconds = 0;
  $scope.minutes = 0;
  $scope.difficulty;




  ////////////////////////
  // $scope functions
  ////////////////////////

  $scope.checkGex = function() {
    $scope.RegexValid = regexBody.test($scope.attempt);

    console.log('Valid Regix = ', $scope.RegexValid);
    console.log('body is ', $scope.attempt.match(regexBody));
    console.log('flags are ', $scope.attempt.match(regexFlags));

  };

  $scope.checkSolution = function() {
    //Only check solution if user has input valid regex
    if ($scope.RegexValid) {
      //Disaggregate user's input into regex components
      var attemptBody = $scope.attempt.match(regexBody);
      var attemptFlags = $scope.attempt.match(regexFlags);

      //create new regex object
      var attemptRegex = new RegExp(attemptBody, attemptFlags);

      //create matches for user's input
      var userAnswers = $scope.challengeData.text.match(attemptRegex);
      console.log('__you got: ', userAnswers);

      //Compare user's answers to challenge answers
      var validSolution = soltionsMatch(userAnswers, $scope.challengeData.expected);
      console.log('answers match ', validSolution);

      if (validSolution) {
        //submit solution to server
        var timeToSolve = new Date() - challStartTime;
        Server.submitUserSolution($scope.attempt, $scope.challengeData.id, timeToSolve);
        console.log('______Called submitUserSolution factory');
        $interval.cancel(window.solutionClock);
      }

    }

  };


  $scope.getRandom = function() {
    console.log('SolveController calling getRandom');
    Server.getRandom($scope, $scope.difficulty);
  };


  ////////////////////////
  // Run scripts!!
  ////////////////////////

  //Load Challenge
  if (Server.currentChallenge.data !== undefined) {
    $scope.challengeData = Server.currentChallenge.data;
  } else {
    $scope.getRandom();
  }

  //Start Timer
  window.solutionClock = $interval(function() {
    updateTimer(challStartTime);
    // console.log('$scope.seconds is ', $scope.seconds);
  }, 1000);


});

var soltionsMatch = function(arr1, arr2) {
  var i;
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
