var serverUrl = '127.0.0.1:8000' //Update me with Process.Env.Port?


angular.module('rehjeks.utils',[])
.factory('Auth', function($http) {

  var signUp = function( {username, password} ){

    $http({
      method: 'POST',
      url: serverUrl+'/signup',
      data: JSON.stringify({username: username, password: password})
    })
    .then(
      function(successResponse){ //first param = successCallback
        console.log(successResponse);
      },
      function(errorResponse){ //second param = errorCallback
        console.log(successResponse);
    });


  }


  return {
    signup: signup
  }


})