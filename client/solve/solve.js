angular.module('rehjeks.solve',[])
.controller('SolveController', function($scope, Server){

  $scope.challengeData = {};

  $scope.solve = function(){
    //checks to see if given solution is valid
    //if valid
      //send valid solution to /solution
      //get new random challenge [GETRANDOM]
    // else not valid
      //display error?
  };


  $scope.getRandom = function(){
    console.log("SolveController calling getRandom")
    Server.getRandom($scope);
  };

  if (Server.currentChallenge.data !== undefined){
    $scope.challengeData = Server.currentChallenge.data;
  } else {
    $scope.getRandom();
  }

});

