angular.module('rehjeks.signup',[])
  .controller('SignupController', function ($scope, Auth){
    $scope.user = {};
    $scope.signup = function() {
      console.log("client invoking signUp");
      console.log("$scope.user = ", $scope.user);

      Auth.signup($scope.user);
    };
  });
