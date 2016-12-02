angular.module('rehjeks.login', [])
  .controller('LoginController', function($scope, Auth){
    $scope.user = {};

    $scope.login = function () {

      console.log("user object contains ", $scope.user)
      Auth.authorize($scope.user, '/login');
    };
  });
