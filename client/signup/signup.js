angular.module('rehjeks.signup', [])
  .controller('SignupController', function ($scope, Auth) {
    $scope.user = {};
    $scope.loggedin = false;

    $scope.signup = function() {
      console.log('client invoking signUp');
      console.log('$scope.user = ', $scope.user);

      Auth.authorize($scope.user, '/signup', $scope);
      
    };

  });

