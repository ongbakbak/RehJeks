<<<<<<< e7f1ed934bd1d97b1e40cbdab80e5d77b175100c
angular.module('rehjeks.solve', [])
.controller('SolveController', function($scope, $interval, Server) {
=======
angular.module('rehjeks.solve',[])
.controller('SolveController', function($scope, $interval, Server){
>>>>>>> Some Fanfare Added

  ////////////////////////
  // Internal variables
  // & functions
  ////////////////////////

  var regexBody = /[^\/].*(?=\/[gim]{0,3}$)/;
  var regexFlags = /[gim]{0,3}$/;
  var challStartTime = new Date();


  var updateTimer = function(startTime){
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




  ////////////////////////
  // $scope functions
  ////////////////////////

  $scope.checkGex = function(){
    $scope.RegexValid = regexBody.test($scope.attempt);

    console.log("Valid Regix = ", $scope.RegexValid);
    console.log("body is ", $scope.attempt.match(regexBody));
    console.log("flags are ", $scope.attempt.match(regexFlags));

  };

  $scope.checkSolution = function() {
    // Only check solution if user has input valid regex
    if($scope.RegexValid){
      // Disaggregate user's input into regex components
      var attemptBody = $scope.attempt.match(regexBody);
      var attemptFlags = $scope.attempt.match(regexFlags);

      // Create new regex object
      var attemptRegex = new RegExp(attemptBody, attemptFlags);

      // Create matches for user's input
      var userAnswers = $scope.challengeData.text.match(attemptRegex);
      
      console.log("__you got: ", userAnswers);

      // Compare user's answers to challenge answers
      var correctSolution = solutionsMatch(userAnswers, $scope.challengeData.expected);
      console.log("answers match ", correctSolution);

      if(correctSolution) {
        // Submit solution to server
        $scope.timeToSolve = new Date() - challStartTime;
        $scope.correctAttempt = attempt;

        // Trigger success fanfare box, cancel failure fanfare box
        $scope.success = true;
        $scope.failure = false;
      } else {

        // Trigger failure fanfare box and store the current matches on the scope
        $scope.failure = true;
        $scope.attemptMatch = userAnswers;
      }

    }

  };

  $scope.next = function() {
    Server.submitUserSolution($scope.attempt, $scope.challengeData.id, $scope.timeToSolve);
    console.log("______Called submitUserSolution factory")
    $interval.cancel(solutionClock);
    $scope.success = false;
    $scope.failure = false;
    $scope.getRandom();
  }


  $scope.getRandom = function() {
    console.log("SolveController calling getRandom")
    Server.getRandom($scope);
    $scope.success
  };


  ////////////////////////
  // Run scripts!!
  ////////////////////////

  // Load Challenge
  if (Server.currentChallenge.data !== undefined) {
    $scope.challengeData = Server.currentChallenge.data;
  } else {
    $scope.getRandom();
  }

  // Start Timer
  var solutionClock = $interval(function(){
    updateTimer(challStartTime);
<<<<<<< e7f1ed934bd1d97b1e40cbdab80e5d77b175100c
    // console.log('$scope.seconds is ', $scope.seconds);
=======
    console.log("$scope.seconds is ", $scope.seconds);
>>>>>>> Some Fanfare Added
  }, 1000);


});

  var solutionsMatch = function(arr1, arr2) {
    var i;
    if(arr1.length !== arr2.length){
      return false;
    }
    for(i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
