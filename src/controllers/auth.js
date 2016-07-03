angular.module('yana')

  .controller('authCtrl', function($scope, $location, Auth) {


    $scope.register = function() {

      var email = $scope.account.email;
      var pass  = $scope.account.password;

      Auth.$createUserWithEmailAndPassword(email, pass).then(function(user) {
        $location.path('/notes');
      }).catch(function(error) {
        console.log(error.message);
      });

    };


    $scope.signIn = function() {

      var email = $scope.account.email;
      var pass  = $scope.account.password;

      Auth.$signInWithEmailAndPassword(email, pass).then(function(user) {
        $location.path('/notes');
      }).catch(function(error) {
        console.log(error.message);
      });

    };


    $scope.signOut = function() {

      Auth.$signOut();
      $location.path('/');

    };


    $scope.resetPassword = function() {

      var email = $scope.account.email;

      Auth.$sendPasswordResetEmail(email).then(function() {
        console.log("Password reset email sent successfully!");
      }).catch(function(error) {
        console.log(error.message);
      });

    };


    $scope.updateEmail = function() {

      var email = $scope.account.email;

      if (email) {
        Auth.$updateEmail(email).then(function() {
          console.log("Email changed successfully!");
        }).catch(function(error) {
          console.log(error.message);
        });
      }

    };


    $scope.updatePassword = function() {

      var pass = $scope.account.password;

      if (pass) {
        Auth.$updatePassword(pass).then(function() {
          console.log("Password changed successfully!");
        }).catch(function(error) {
          console.log(error.message);
        });
      }

    };


    $scope.deleteAccount = function() {

      Auth.$deleteUser().then(function() {
        console.log("Deleted user!");
        $location.path('/');
      }).catch(function(error) {
        console.log(error.message);
      });

    };


  });
