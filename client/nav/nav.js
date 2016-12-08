angular.module('rehjeks.nav', [
  'rehjeks.login',
  'rehjeks.signup',
  'ui.router'
])

.controller('NavController', function($scope) {
  $scope.loggedIn = true;
  $scope.showLogin = true;
  $scope.username = "fred";
});
