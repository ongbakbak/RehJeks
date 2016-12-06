angular.module('rehjeks.solve',[])
.controller('SolveController', function($scope, Server){
  var regexBody = /[^\/].*(?=\/[gim]{0,3}$)/;
  var regexFlags = /[gim]{0,3}$/;


  $scope.RegexValid;
  $scope.attempt;
  $scope.challengeData = {};

  $scope.checkGex = function(){
    $scope.RegexValid = regexBody.test($scope.attempt);

    console.log("Valid Regix = ", $scope.RegexValid);
    console.log("body is ", $scope.attempt.match(regexBody));
    console.log("flags are ", $scope.attempt.match(regexFlags));

  };

  $scope.checkSolution = function() {
    //Only check solution if user has input valid regex
    if($scope.RegexValid){
      //Disaggregate user's input into regex components
      var attemptBody = $scope.attempt.match(regexBody);
      var attemptFlags = $scope.attempt.match(regexFlags);

      //create new regex object
      var attemptRegex = new RegExp(attemptBody, attemptFlags);

      //create matches for user's input
      var userAnswers = $scope.challengeData.text.match(attemptRegex);
      console.log("__you got: ", userAnswers);

      //Compare user's answers to challenge answers
      var validSolution = soltionsMatch(userAnswers, $scope.challengeData.expected);
      console.log("answers match ", validSolution);
      
      if(validSolution) {
        //submit solution to server
        console.log("__Calling submitUserSolution factory")
        Server.submitUserSolution($scope.attempt, $scope.challengeData.id);
        console.log("______Called submitUserSolution factory")
      }

    }






  };

  $scope.solve = function() {
    //checks to see if given solution is valid
    //if valid
      //send valid solution to /solution
      //get new random challenge [GETRANDOM]
    // else not valid
      //display error?
  };


  $scope.getRandom = function() {
    console.log("SolveController calling getRandom")
    Server.getRandom($scope);
  };

  if (Server.currentChallenge.data !== undefined) {
    $scope.challengeData = Server.currentChallenge.data;
  } else {
    $scope.getRandom();
  }

});

  var soltionsMatch = function(arr1, arr2) {
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




