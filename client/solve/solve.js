angular.module('rehjeks.solve',[])
.controller('SolveController', function($scope, Solver){

  $scope.challengeText = "The man who invented it doesn't want it. The man who bought it doesn't need it. The man who needs it doesn't know it. What is it?";

  $scope.getRandom = function(){
    console.log("SolveController calling getRandom")
    Solver.getRandom();
  };


});

