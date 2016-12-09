angular.module('rehjeks.useroptions', [])

.controller('UserOptionsController', function($scope, Auth) {
  $scope.logout = function(){
    console.log("logging out");
    Auth.logout();
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    window.GlobalUser.username = '';
    $scope.loggedin = false;
  }
});
