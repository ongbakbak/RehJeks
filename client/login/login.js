angular.module('rehjeks.login', [])
  .controller('LoginController', function($scope, Auth){
    $scope.user = {};

    $scope.login = function () {

      console.log("user object contains ", $scope.user)
      Auth.authorize($scope.user, '/login')
        .then(function(token) {
          console.log('token from login is', token);
          $window.localStorage.setItem('com.rehjeks', token);
          $location.path('/challenges');
        })
        .catch(function(error) {
          console.error(error);
        });
    };
  });
