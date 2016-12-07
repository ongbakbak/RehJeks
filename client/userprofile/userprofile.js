angular.module('rehjeks.profile', [])

  .controller('UserprofileController', function($scope, Server){
    $scope.user = {};
    $scope.user.challenges = [];
    $scope.user.solutions = [];

    $scope.getSolutions = function(){
    	return Server.getUserSolutions($scope, window.GlobalUser.username);
    }

    $scope.getAllChallenges = function(){
    	return Server.getUserChallenges($scope);
    }

    // Set up view of challenge and solutions when clicked on it 
    // Use Nate's new get request method to get challenge and solution by ID

    // $scope.getSolutions()
    // .then(function(results){
    // 	console.log($scope.user.solutions.data);
    // 	// Get challengeIds of solved problems for user
    // 	for(var i = 0; i < $scope.user.solutions.data.length; i++){
    // 		$scope.user.challengeIds.push($scope.user.solutions.data[i].challengeId);
    // 	};
    // 	console.log($scope.user.challengeIds);
    // 	return $scope.getAllChallenges();
    // })
    // .then(function(results){
    // 	console.log($scope.user.allchallenges.data);
    // 	// Cross reference User challenge Ids with all challenges
    // 	// push overlapping prompts and ids into 
    // 	for(var i = 0; i < $scope.user.allchallenges.data.length; i++){
    // 		if($scope.user.challengeIds.indexOf($scope.user.allchallenges.data[i].id) > -1) {
    // 			$scope.user.prompts.push([$scope.user.allchallenges.data[i].prompt, $scope.user.allchallenges.data[i].id]);
    // 		}
    // 	}
    // 	console.log($scope.user.prompts);
    // })
    
  });