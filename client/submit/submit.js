angular.module('rehjeks.submit', [])
  .controller('SubmitController', function ($scope, $http, Server) {

    let submitData = {};
    //saving blank form as originForm
    $scope.originForm = angular.copy($scope.submitData);
    $scope.resetForm = function(){
      $scope.submitData = angular.copy($scope.originForm);
      // Assign clear state to modified form
      $scope.submitForm.$setPristine();
    };


    let validation = /\/((?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+)\/((?:g(?:im?|mi?)?|i(?:gm?|mg?)?|m(?:gi?|ig?)?)?)/;
    let regexBody = /[^\/].*(?=\/[gim]{0,3}$)/;
    let regexFlags = /[gim]{0,3}$/;


    $scope.submit = function() {
      Server.submitNewChallenge($scope);
      $scope.resetForm();
    };

    $scope.onUpdate = function() {
      if (!!$scope.submitData.answer && !!$scope.submitData.text) {
        let makeRegex = function () {
          let answerBody = $scope.submitData.answer.match(regexBody);
          let answerFlags = $scope.submitData.answer.match(regexFlags);
          return new RegExp(answerBody, answerFlags);
        };

        let regexAnswer = makeRegex();

        $scope.submitData.expected = function(){
          let textString = $scope.submitData.text;
          let textArray = textString.split(" ");
          return textArray.filter ( function (text) {
            console.log('matched data ', text.match(regexAnswer));
            return text.match(regexAnswer) !== null;
          });
        }().join(" ");
      }
    };
  });
