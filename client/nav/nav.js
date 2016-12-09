angular.module('rehjeks.nav', [
  'rehjeks.login',
  'rehjeks.signup',
  'ngCookies',
  'ui.router'
])

.controller('NavController', function($scope, $cookies) {
  $scope.loggedIn = (document.cookie !== "undefined");
  $scope.showDropdown = false;
  $scope.username = document.cookie===undefined ? document.cookie.split(';')[1].split('=')[1] : "anonymous";

  $scope.$watch(function(){return $cookies.get('username');}, function(newValue) {
    $scope.loggedIn = !!$cookies.get('username');
    $scope.username = $cookies.get('username');
    // $scope.loggedIn = (newValue !== "undefined");
    // $scope.username = newValue==="undefined" ? newValue.split(';')[1].split('=')[1] : "anonymous";
  })
});
