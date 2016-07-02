angular.module('yana')

  .config(function($routeProvider, $locationProvider) {

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

      .when('/reset', {
        templateUrl: 'views/reset.html',
        controller: 'resetCtrl'
      })

      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'accountCtrl'
      })

      .when('/notes', {
        templateUrl: 'views/notes.html',
        controller: 'mainCtrl'
      });

      $locationProvider.html5Mode(true);

  });
