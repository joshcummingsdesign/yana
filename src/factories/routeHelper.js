angular.module('yana')

  .factory('routeHelper', function($q, $location, Auth) {

    return {

      direct: function(route) {
        var q = $q.defer();

        Auth.$onAuthStateChanged(function(user) {
          if (user) {
            q.resolve($location.path(route));
          } else {
            q.resolve();
          }
        });

        return q.promise;
      },

      protect: function() {
        var q = $q.defer();

        Auth.$onAuthStateChanged(function(user) {
          if (user) {
            q.resolve();
          } else {
            q.resolve($location.path('/'));
          }
        });

        return q.promise;
      }

    };

  });
