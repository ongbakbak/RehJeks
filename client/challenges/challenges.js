
angular.module('rehjeks.challenges', [])

.controller('ChallengesController', function($scope, Server) {
  $scope.challengeList = [];

  $scope.getChallenge = function( {id} ) {
    Server.getChallenge(id);
  };




  $scope.getAllChallenges = function() {
    Server.getAllChallenges($scope);
  };

  $scope.getAllChallenges();

});
