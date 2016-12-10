angular.module('rehjeks.profile', [
  'ngCookies'
])

  .controller('UserprofileController', function($scope, Server, $cookies) {
    $scope.user = {};
    $scope.username = $cookies.get('username');
    $scope.user.show = false;
    $scope.user.challenges = [];

    $scope.getUserChallenges = function() {
    	return Server.getUserChallenges($scope, $cookies.get('username'));
    };

    $scope.show = function() {
      return $scope.user.show === !$scope.user.show;
    };

    $scope.showTime = function(timeStr) {
      console.log(timeStr);
      return new Date(Number(timeStr)).toUTCString().slice(20,25);
    }

    $scope.getUserChallenges()
    .then(function(challenges) {
      console.log("user challenges");
      console.log($scope.user.challenges);
    });

  });
