angular.module('yana')

  .controller('authCtrl', function($scope, $firebaseAuth) {

    var auth = $firebaseAuth();

    $scope.signIn = function() {

      var email = $scope.account.email;
      var pass  = $scope.account.password;

      auth.$signInWithEmailAndPassword(email, pass).then(function(user) {
        console.log(user);
      }).catch(function(error) {
        console.log(error.message);
      });

    };

    $scope.register = function() {

      var email = $scope.account.email;
      var pass  = $scope.account.password;

      auth.$createUserWithEmailAndPassword(email, pass).then(function(user) {
        console.log(user);
      }).catch(function(error) {
        console.log(error.message);
      });

    };

  });
