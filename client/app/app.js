angular.module('rehjeks', [
  'rehjeks.factories',
  'rehjeks.login',
  'rehjeks.signup',
  'rehjeks.challenges',
  'rehjeks.solve',
  'rehjeks.profile',
  'rehjeks.nav',
  'rehjeks.submit',
  'rehjeks.useroptions',
  'ngAnimate',
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider){

  $urlRouterProvider.otherwise('/solve');

  $stateProvider

  .state('solve', {
    url: '/solve',
    views: {
      "nav": {
        templateUrl: 'nav/nav.html',
        controller: 'NavController'
      },
      "body": {
        templateUrl: 'solve/solve.html',
        controller: 'SolveController'
      }
    }
  })
  .state('solve.login', {
    templateUrl: 'login/login.html',
    controller: 'LoginController',
    parent: 'solve'
  })
  .state('solve.useroptions', {
    templateUrl: 'useroptions/useroptions.html',
    controller: 'UserOptionsController',
    parent: 'solve'
  })





  .state('challenges', {
    url: '/challenges',
    views: {
      "nav": {
        templateUrl: 'nav/nav.html',
        controller: 'NavController'
      },
      "body": {
        templateUrl: 'challenges/challenges.html',
        controller: 'ChallengesController'
      }
    }
  })
  .state('challenges.login', {
    templateUrl: 'login/login.html',
    controller: 'LoginController',
    parent: 'challenges'
  })
  .state('challenges.useroptions', {
    templateUrl: 'useroptions/useroptions.html',
    controller: 'UserOptionsController',
    parent: 'challenges'
  })

  .state('submit', {
    url: '/submit',
    views: {
      "nav": {
        templateUrl: 'nav/nav.html',
        controller: 'NavController'
      },
      "body": {
        templateUrl: 'submit/submit.html',
        controller: 'SubmitController'
      }
    }
  })
  .state('submit.login', {
    templateUrl: 'login/login.html',
    controller: 'LoginController',
    parent: 'submit'
  })
  .state('submit.useroptions', {
    templateUrl: 'useroptions/useroptions.html',
    controller: 'UserOptionsController',
    parent: 'submit'
  })

  .state('profile', {
    url: '/profile',
    views: {
      "nav": {
        templateUrl: 'nav/nav.html',
        controller: 'NavController'
      },
      "body": {
        templateUrl: 'userprofile/userprofile.html',
        controller: 'UserprofileController'
      }
    }
  })
  .state('profile.login', {
    templateUrl: 'login/login.html',
    controller: 'LoginController',
    parent: 'profile'
  })
  .state('profile.useroptions', {
    templateUrl: 'useroptions/useroptions.html',
    controller: 'UserOptionsController',
    parent: 'profile'
  })

})
// Workaround for "unhandled rejection" inherent to Angular 1.6.0 with ui-router
.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);;
