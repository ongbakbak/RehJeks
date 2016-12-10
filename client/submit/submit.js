angular.module('rehjeks.submit', [])
  .controller('SubmitController', function ($scope, $http, Server) {

    var submitData = {};
    //saving blank form as originForm
    $scope.originForm = angular.copy($scope.submitData);

    $scope.resetForm = function(){
      $scope.submitData = angular.copy($scope.originForm);
      // Assign clear state to modified form

      $scope.submitForm.$setPristine();
    };

    $scope.submit = function() {
      Server.submitNewChallenge($scope);
      $scope.resetForm();
    };
  });
