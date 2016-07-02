angular.module('yana')

  .config(function($routeProvider) {

    $routeProvider

      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })

      .when('/notes', {
        templateUrl: 'views/notes.html',
        controller: 'mainCtrl'
      });

  });
