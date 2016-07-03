angular.module('yana')

  .config(function($routeProvider, $locationProvider) {

    $routeProvider

      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'authCtrl'
      })

      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'authCtrl'
      })

      .when('/sign-in', {
        templateUrl: 'views/sign-in.html',
        controller: 'authCtrl'
      })

      .when('/reset', {
        templateUrl: 'views/reset.html',
        controller: 'authCtrl'
      })

      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'authCtrl'
      })

      .when('/notes', {
        templateUrl: 'views/notes.html',
        controller: 'mainCtrl'
      });

      $locationProvider.html5Mode(true);

  });
