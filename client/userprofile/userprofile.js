angular.module('rehjeks.profile', [])

  .controller('UserprofileController', function($scope, Server) {
    $scope.user = {};
    $scope.user.show = false; 
    $scope.user.challenges = [];

<<<<<<< d8f3961e97cd8c49f9c18dae1de00c8ade1e13b2
    $scope.getUserChallenges = function() {
    	return Server.getUserChallenges($scope, window.GlobalUser.username);
    };

    $scope.show = function() {
      return $scope.user.show === false ? $scope.user.show = true : $scope.user.show = false; 
    };

    $scope.getUserChallenges()
    .then(function(challenges) {
      console.log($scope.user.challenges);
=======
    $scope.getUserChallenges = function(){
    	return Server.getUserChallenges($scope, window.GlobalUser.username);
    };

    $scope.show = function(){
        return $scope.user.show === false ? $scope.user.show = true : $scope.user.show = false; 
    }

    $scope.getUserChallenges()
    .then(function(challenges){
        console.log($scope.user.challenges);
>>>>>>> Diplaying completed challenges on user profile
    });
    
  });
