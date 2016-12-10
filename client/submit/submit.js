angular.module('rehjeks.submit', [])
  .controller('SubmitController', function ($scope, $http, Server) {



    $scope.submit = function() {
      Server.submitNewChallenge($scope, window.GlobalUser.username);

    };
  });
