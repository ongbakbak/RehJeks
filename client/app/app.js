angular.module('rehjeks', [
  'rehjeks.factories',
  'rehjeks.login',
  'rehjeks.signup',
  'rehjeks.challenges',
  'rehjeks.solve',
  'rehjeks.profile',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider){

  $urlRouterProvider.otherwise('/solve');

  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'login/login.html',
    controller: 'LoginController'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'signup/signup.html',
    controller: 'SignupController'
  })
  .state('solve', {
    url: '/solve',
    templateUrl: 'solve/solve.html',
    controller: 'SolveController'
  })
  .state('challenges', {
    url: '/challenges',
    templateUrl: 'challenges/challenges.html',
    controller: 'ChallengesController'
  })
  .state('profile', {
    url: '/profile',
    templateUrl: 'userprofile/userprofile.html',
    controller: 'UserprofileController'
  })

});
