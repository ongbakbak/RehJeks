angular.module('rehjeks.login', [])
  .controller('LoginController', function($scope, Auth) {
    $scope.user = {};
    $scope.showLogin = true;
    $scope.showSignup = false;
    $scope.signin = false;
    $scope.actionTitle = 'Login';
    $scope.loggedin = window.GlobalUser.username !== ''; // Shouldn't have to use this eventually
    $scope.loggedin = document.cookie !== "undefined";



    $scope.login = function () {
      console.log('user object contains ', $scope.user);
      Auth.authorize($scope.user, '/login', $scope);
    };

    $scope.submit = function() {
      if ($scope.login) {
        Auth.authorize($scope.user, '/login', $scope);
      } else if ($scope.signup) {
        Auth.authorize($scope.user, '/signup', $scope);
      }
      var form = document.getElementsByName('loginForm')[0];
      form.reset();
    };

    $scope.seeLogin = function() {
      console.log('trying to show signin');
      $scope.showLogin = true;
      $scope.showSignup = false;
      $scope.actionTitle = 'Login';
    };

    $scope.seeSignup = function() {
      console.log('trying to show signin');
      $scope.showLogin = false;
      $scope.showSignup = true;
      $scope.actionTitle = 'Signup';
    };

    $scope.logout = function() {
      console.log('logging out');
      Auth.logout();
      window.GlobalUser.username = '';

      $scope.loggedin = false;
    };


  });
