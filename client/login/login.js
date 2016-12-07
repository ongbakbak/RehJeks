angular.module('rehjeks.login', [])
  .controller('LoginController', function($scope, Auth) {
    $scope.user = {};
    $scope.login = true;
    $scope.signup = false;
    $scope.actionTitle = 'Login';



<<<<<<< HEAD
      console.log("user object contains ", $scope.user);
=======
    $scope.login = function () {
      console.log('user object contains ', $scope.user);
>>>>>>> BackAlleyHax/master
      Auth.authorize($scope.user, '/login');
    };

    $scope.submit = function() {
      if ($scope.login) {
        Auth.authorize($scope.user, '/login');
      } else if ($scope.signup) {
        Auth.authorize($scope.user, '/signup');
      }
    };

    $scope.seeLogin = function() {
      console.log('trying to show signin');
      $scope.login = true;
      $scope.signup = false;
      $scope.actionTitle = 'Login';
    };

    $scope.seeSignup = function() {
      console.log('trying to show signin');
      $scope.login = false;
      $scope.signup = true;
      $scope.actionTitle = 'Signup';
    };



  });

