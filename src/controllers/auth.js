angular.module('yana')

  .controller('authCtrl', function($scope, $location, $firebaseAuth) {

    var auth = $firebaseAuth();

    $scope.signIn = function() {

      var email = $scope.account.email;
      var pass  = $scope.account.password;

      auth.$signInWithEmailAndPassword(email, pass).then(function(user) {
        $location.path('/notes');
      }).catch(function(error) {
        console.log(error.message);
      });

    };


    $scope.signOut = function() {

      auth.$signOut();
      $location.path('/');

    };


    $scope.register = function() {

      var email = $scope.account.email;
      var pass  = $scope.account.password;

      auth.$createUserWithEmailAndPassword(email, pass).then(function(user) {
        $location.path('/notes');
      }).catch(function(error) {
        console.log(error.message);
      });

    };


    $scope.resetPassword = function() {

      var email = $scope.account.email;

      auth.$sendPasswordResetEmail(email).then(function() {
        console.log("Password reset email sent successfully!");
      }).catch(function(error) {
        console.log(error.message);
      });

    };


    $scope.updateAccount = function() {

      if ($scope.account === undefined || (!$scope.account.email && !$scope.account.password)) {
        console.log('No changes made.');
        return;
      }

      var email = $scope.account.email;
      var pass  = $scope.account.password;

      if (email) {
        auth.$updateEmail(email).then(function() {
          console.log("Email changed successfully!");
        }).catch(function(error) {
          console.log(error.message);
        });
      }

      if (pass) {
        auth.$updatePassword(pass).then(function() {
          console.log("Password changed successfully!");
        }).catch(function(error) {
          console.log(error.message);
        });
      }

    };


    $scope.deleteAccount = function() {

      auth.$deleteUser().then(function() {
        console.log("Deleted user!");
        $location.path('/');
      }).catch(function(error) {
        console.log(error.message);
      });

    };


  });
