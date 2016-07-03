angular.module('yana')

  .factory('Auth', function($firebaseAuth) {

    return $firebaseAuth();

  });
