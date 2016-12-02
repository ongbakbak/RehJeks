angular.module('rehjeks', [
  // 'rehjeks.utils',
   'rehjeks.logIn',
  // 'rehjeks.signUp',
  // 'rehjeks.challenges',
  // 'rehjeks.solve',
  'ui.router',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider){
  $routeProvider
    .when('/logIn', {
      templateUrl: 'login/login.html',
      controller: 'logInController'
    })
    .when('/signUp', {
        templateUrl: 'signup/'
    })
});
