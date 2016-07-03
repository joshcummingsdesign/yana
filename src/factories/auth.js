angular.module('yana')

  .factory('authService', function($q, $location, $firebaseAuth) {

    var auth = $firebaseAuth();

    return {
      protect: function() {
        var q = $q.defer();
        var user = auth.$getAuth();
        var loggedIn = user ? true : false;

        if (loggedIn) {
          q.resolve();
        } else {
          q.resolve($location.path('/'));
        }
        return q.promise;
      }
    };

  });
