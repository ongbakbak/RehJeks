
angular.module('rehjeks.challenges', [])

.controller('ChallengesController', function($scope, $interval, Server) {
  $interval.cancel(window.solutionClock);
  $scope.challengeList = [];

  $scope.getChallenge = function( {id} ) {
    Server.getChallenge(id);
  };




  $scope.getAllChallenges = function() {
    Server.getAllChallenges($scope);
  };

  $scope.getAllChallenges();

});
