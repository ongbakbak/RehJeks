angular.module('rehjeks', [
  'rehjeks.factories',
  'rehjeks.login',
  'rehjeks.signup',
  'rehjeks.challenges',
  'rehjeks.solve',
  'rehjeks.profile',
  'ui.router',
  'ngRoute'
])
.config(function($routeProvider /*, $httpProvider */){
  $routeProvider
    .when('/login', {
      templateUrl: 'login/login.html',
      controller: 'LoginController'
    })
    .when('/signup', {
      templateUrl: 'signup/signup.html',
      controller: 'SignupController'
    })
    .when('/solve', {
      templateUrl: 'solve/solve.html',
      controller: 'SolveController'
    })
    .when('/challenges', {
      templateUrl: 'challenges/challenges.html',
      controller: 'ChallengesController'
    })
    .when('/profile', {
      templateUrl: 'userprofile/userprofile.html',
      controller: 'UserprofileController'
    })
    .when('/', {
      templateUrl: 'challenges/challenges.html',
      controller: 'ChallengesController'
    });
});
