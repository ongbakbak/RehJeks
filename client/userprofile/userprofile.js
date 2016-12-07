angular.module('rehjeks.profile', [])

  .controller('UserprofileController', function($scope, Server) {
    $scope.user = {};
    $scope.user.show = false; 
    $scope.user.challenges = [];

    $scope.getUserChallenges = function() {
    	return Server.getUserChallenges($scope, window.GlobalUser.username);
    };

    $scope.show = function() {
      return $scope.user.show === false ? $scope.user.show = true : $scope.user.show = false; 
    };

    $scope.getUserChallenges()
    .then(function(challenges) {
      console.log($scope.user.challenges);
    });
    
  });
