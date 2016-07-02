angular.module('yana')

  .config(function($routeProvider) {

    $routeProvider

      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
      })

      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'registerCtrl'
      })

      .when('/sign-in', {
        templateUrl: 'views/sign-in.html',
        controller: 'signInCtrl'
      })

      .when('/password-reset', {
        templateUrl: 'views/password-reset.html',
        controller: 'passwordCtrl'
      })

      .when('/notes', {
        templateUrl: 'views/notes.html',
        controller: 'mainCtrl'
      });

  });
