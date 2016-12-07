//////////////////////////////////
//                              //
//        DUMMY DATA            //
//                              //
//////////////////////////////////


window.GlobalUser = {};
window.GlobalUser.username = "user1";
window.GlobalUser.userId = "80085"
window.GlobalUser.solvedChallenges = ['X12X', 'Y14Y'];

var exampleChallengeList = [
  {
    id: 1,
    userId: 1,
    title: 'challenge number 1',
    prompt: 'be challenged, breaux',
    text: 'abcdef',
    difficulty: 'mega hard',
    expected: ['a'],
    answer: '^\\w',
    cheats: ['something']
  },
  {
    id: 2,
    userId: 2,
    title: 'challenge number 2',
    prompt: 'be super challenged, breaux',
    text: 'abcdef',
    difficulty: 'mega hard',
    expected: ['a'],
    answer: '^\\w',
    cheats: ['something']
  }
];


//////////////////////////////////
//                              //
//            APP               //
//                              //
//////////////////////////////////

var serverUrl = 'http://localhost:8000' //Update me with Process.Env.Port?

angular.module('rehjeks.factories',[])
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
.factory('Server', function($http, $location){
  //shared acces for Challenges and Solve Controller
  var currentChallenge = {data: undefined};

  var getRandom = function($scope){

    var username = window.GlobalUser.username;
    var solvedChallenges = window.GlobalUser.solvedChallenges;

    var params = {username, solvedChallenges};

    $http({
      method: 'GET',
      url: serverUrl + '/challenge',
      params: params,
      paramSerializer: '$httpParamSerializerJQLike'
    })
    .then(
      function(returnedChallenge){ //first param = successCallback
        console.log('getRandom Returned this form server: ', returnedChallenge);

        //pass challenge to proper scope to display
        $scope.challengeData = returnedChallenge.data;

        //save current challenge in shared access
        currentChallenge.data = returnedChallenge.data;

      })
    .catch(
      function(errorRes){ //second param = errorCallback
        console.log(errorRes);
    });

  };


  var getAllChallenges = function($scope){

    $http({
      method: 'GET',
      url: serverUrl + '/challenges'
    })
    .then(
      function(returnedData){ //first param = successCallback
        console.log('getRandom Returned this form server: ', returnedData);

        //$scope.challengeList = returnedData.data;
        //  OR
        //$scope.challengeList = returnedData;
        console.log(returnedData);
        $scope.challengeList = returnedData.data;

      })
    .catch(
      function(errorRes){ //second param = errorCallback
        console.log(errorRes);
    });

  };



  var getChallenge = function(id){

    $http({
      method: 'GET',
      url: serverUrl + '/challenge',
      params: {challengeId: id},
      paramSerializer: '$httpParamSerializerJQLike'

    })
    .then(
      function(returnedChallenge){ //first param = successCallback

        //DUMMY FIX
        returnedChallenge = exampleChallengeList[id - 1]; //DUMMY

        //SET currentChallengeData to returned Data
        currentChallenge.data = returnedChallenge;
        $location.path('solve');

      })
    .catch(
      function(errorRes){ //second param = errorCallback
        console.log(errorRes);
    });

  };


  var submitUserSolution = function(solution, challengeId, timeToSolve){

    var submission = {
      solution: solution,
      username: window.GlobalUser.username,
      userId: window.GlobalUser.userId,
      challengeId: challengeId,
      timeToSolve: timeToSolve
    };

    $http({
      method: 'POST',
      url: 'solution',
      data: JSON.stringify(submission)
    })

  };

  ///////////////////////////
  //    Factory Interface  //
  ///////////////////////////

  return {
    getAllChallenges: getAllChallenges,
    getRandom: getRandom,
    getChallenge: getChallenge,
    currentChallenge: currentChallenge,
    submitUserSolution: submitUserSolution
  }

});
