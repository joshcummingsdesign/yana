angular.module('yana')

  .controller('signInCtrl', function($scope) {

    $scope.login = function() {

      console.log($scope.email);
      console.log($scope.password);

    };

  });
