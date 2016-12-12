angular.module('rehjeks.submit', [])
  .controller('SubmitController', function ($scope, $http, Server, RegexParser) {

    let submitData = {};
    //saving blank form as originForm
    $scope.originForm = angular.copy($scope.submitData);
    $scope.resetForm = function(){
      $scope.submitData = angular.copy($scope.originForm);
      // Assign clear state to modified form
      $scope.submitForm.$setPristine();
    };


    $scope.submit = function() {
      Server.submitNewChallenge($scope)
      .then(resp => {
        $scope.submitted = true;
        $scope.resetForm();
      });
    };

    $scope.onUpdate = function() {
      if (!!$scope.submitData.answer && !!$scope.submitData.text) {


      let regexAnswer = RegexParser($scope.submitData.answer);

      $scope.submitData.expected = function(){
        let textString = $scope.submitData.text;
        return textString.match(regexAnswer);
      }
    };
  }
});
