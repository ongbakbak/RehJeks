angular.module('rehjeks.nav', [
  'rehjeks.login',
  'rehjeks.signup',
  'ui.router'
])

.controller('NavController', function($scope) {
  $scope.loggedIn = (document.cookie !== "undefined");
  $scope.showLogin = false;
  $scope.username = document.cookie===undefined ? document.cookie.split(';')[1].split('=')[1] : "anonymous";
});
