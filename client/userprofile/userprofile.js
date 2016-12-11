angular.module('rehjeks.profile', [
  'ngCookies'
])

  .controller('UserprofileController', function($scope, Server, $cookies) {
    $scope.user = {};
    $scope.user.difficulties = {};
    $scope.user.challenges = [];
    $scope.user.difficulties.easy = 0;
    $scope.user.difficulties.medium = 0;
    $scope.user.difficulties.hard = 0;
    $scope.username = $cookies.get('username');
    $scope.user.show = false;


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
      console.log($scope.user.challenges);
      $scope.user.challenges.forEach(function(challenge){
        if(challenge.challenge.difficulty === 'easy'){
          $scope.user.difficulties.easy++;
        }
        else if(challenge.challenge.difficulty === 'medium'){
          $scope.user.difficulties.medium++;
        }
        else if(challenge.challenge.difficulty === 'hard'){
          $scope.user.difficulties.hard++;
        }
      })
    });

  });
