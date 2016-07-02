angular.module('yana')

  .controller('loginCtrl', function($scope) {

    $scope.login = function() {

      console.log($scope.email);
      console.log($scope.password);

    };

  });
