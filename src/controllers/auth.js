angular.module('yana')

  .controller('authCtrl', function($scope, $location, Auth) {

    // TODO: Check for network errors
    $scope.error = {};

    $scope.register = function() {

      var email = $scope.account.email;
      var pass  = $scope.account.password;

      Auth.$createUserWithEmailAndPassword(email, pass).then(function(user) {
        $location.path('/notes');
      }).catch(function(error) {
        switch(error.code) {
          case 'auth/email-already-in-use':
            $scope.error.message = 'Email address already in use.';
            break;
          case 'auth/invalid-email':
            $scope.error.message = 'Inalid email address.';
            break;
          case 'auth/operation-not-allowed':
            $scope.error.message = 'Email accounts are disabled at this time.';
            break;
          case 'auth/weak-password':
            $scope.error.message = 'Please create a stronger password.';
            break;
          default:
            $scope.error.message = 'There was an issue handling your request.';
        }
      });

    };


    $scope.signIn = function() {

      var email = $scope.account.email;
      var pass  = $scope.account.password;

      Auth.$signInWithEmailAndPassword(email, pass).then(function(user) {
        $location.path('/notes');
      }).catch(function(error) {
        switch(error.code) {
          case 'auth/invalid-email':
            $scope.error.message = 'Invalid email address.';
            break;
          case 'auth/user-disabled':
            $scope.error.message = 'Account has been deactivated.';
            break;
          case 'auth/user-not-found':
            $scope.error.message = 'User not found.';
            break;
          case 'auth/wrong-password':
            $scope.error.message = 'Incorrect password.';
            break;
          default:
            $scope.error.message = 'There was an issue handling your request.';
        }
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
        switch(error.code) {
          case 'auth/invalid-email':
            $scope.error.message = 'Invalid email address.';
            break;
          case 'auth/user-not-found':
            $scope.error.message = 'User not found.';
            break;
          default:
            $scope.error.message = 'There was an issue handling your request.';
        }
      });

    };


    $scope.updateEmail = function() {

      if ($scope.account) {
        var email = $scope.account.email;
        if (email) {
          Auth.$updateEmail(email).then(function() {
            console.log("Email changed successfully!");
          }).catch(function(error) {
            $scope.error.message = 'Invalid email address.';
          });
        }
      }

    };


    $scope.updatePassword = function() {

      if ($scope.account) {
        var pass = $scope.account.password;
        if (pass) {
          Auth.$updatePassword(pass).then(function() {
            console.log("Password changed successfully!");
          }).catch(function(error) {
            switch(error.code) {
              case 'auth/weak-password':
                $scope.error.message = 'Please create a stronger password.';
                break;
              default:
                $scope.error.message = 'There was an issue handling your request.';
            }
          });
        }
      }

    };


    $scope.deleteAccount = function() {

      // TODO: Add an are you sure confirmation

      Auth.$deleteUser().then(function() {
        console.log("Deleted user!");
        $location.path('/');
      }).catch(function(error) {
        $scope.error.message = 'There was an issue handling your request.';
      });

    };


  });
