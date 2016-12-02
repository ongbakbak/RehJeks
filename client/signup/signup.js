angular.module('rehjeks.signUp',[])
  .controller('SignUpController', function ($scope, Auth){
    $scope.user = {};
    $scope.signUp = function() {
      Auth.signUp($scope.user);
    };
  });
