angular.module('rehjeks.useroptions', [
  'ngCookies'
])

.controller('UserOptionsController', function($scope, Auth, $cookies, $location) {
  $scope.loggedin = true;
  $scope.logout = function(){
    console.log("logging out");
    $cookies.remove('username');
    window.GlobalUser.username = '';
    $scope.loggedin = false;
  }

  $scope.redirect = function(){
  	$location.path('/profile');
  }

});
