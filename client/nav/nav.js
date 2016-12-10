angular.module('rehjeks.nav', [
  'rehjeks.login',
  'rehjeks.signup',
  'ngCookies',
  'ngAnimate',
  'ui.router'
])

.controller('NavController', function($scope, $cookies) {
  $scope.loggedIn = $cookies.get('username');
  $scope.dropdown = {
    show: false
  };
  $scope.username = $cookies.get('username');

  $scope.$watch(function(){return $cookies.get('username');}, function(newValue) {
    $scope.loggedIn = !!$cookies.get('username');
    $scope.username = $cookies.get('username');
    // $scope.loggedIn = (newValue !== "undefined");
    // $scope.username = newValue==="undefined" ? newValue.split(';')[1].split('=')[1] : "anonymous";
  })
});
