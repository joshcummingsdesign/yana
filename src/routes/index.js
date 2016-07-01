angular.module('supaHot')

  .config(function($routeProvider) {

    $routeProvider

      .when('/', {

        templateUrl: 'views/login.html',
        controller: 'mainCtrl'

      });

  });
