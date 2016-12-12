angular.module('rehjeks.useroptions', [
  'ngCookies'
])

.controller('UserOptionsController', function($scope, Server, $cookies, $location) {
  $scope.user = {};
  $scope.loggedin = true;
  $scope.user.challenges = [];
  $scope.user.numberOfChallenges = $scope.user.challenges.length;
  $scope.singularOrPlural = 'challenges';
  $scope.points = window.GlobalUser.points;

  $scope.logout = function() {
    $cookies.remove('username');
    window.GlobalUser.username = '';
    $scope.loggedin = false;

  }

  $scope.redirect = function() {
  	$location.path('/profile');
  }

  Server.getUserChallenges($scope, $cookies.get('username'))
  .then(results => {
    var pointValues = {"easy": 1, "medium": 2, "hard": 3};
    window.GlobalUser.points = $scope.user.challenges.map(challenge => {
      return pointValues[challenge.challenge.difficulty];
    })
    .reduce((a,b) => a + b);
    $scope.points = window.GlobalUser.points;
  });

});
