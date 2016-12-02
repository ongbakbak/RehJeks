window.GlobalUser = {}; 
window.GlobalUser.username = "Guest";
window.GlobalsolvedChallenges = ['X12X', 'Y14Y'];

var serverUrl = 'http://localhost:8000' //Update me with Process.Env.Port?

angular.module('rehjeks.utils',[])
.factory('Auth', function($http) {

  var authorize = function( {username, password}, route){
    $http({
      method: 'POST',
      url: serverUrl + route,
      data: JSON.stringify({username: username, password: password})
    })
    .then(
      function(successRes){ //first param = successCallback
        console.log('server should give me response!');
      },
      function(errorRes){ //second param = errorCallback
        console.log(errorRes);
      }
    );
  };

  return {
    authorize: authorize
  }


})
.factory('Solver', function($http){

  var getRandom = function(){

    username = window.GlobalUser.username;
    solvedChallenges = window.GlobalUser.solvedChallenges;

    $http({
      method: 'GET',
      url: serverUrl + '/challenge',
      params: {username: username, solvedChallenges: solvedChallenges};
    })
    .then(
      function(successRes){ //first param = successCallback
        console.log('server should give me response!');
      },
      function(errorRes){ //second param = errorCallback
        console.log(errorRes);
      }
    );

  };


  return {
    getRandom: getRandom
  }

});
















