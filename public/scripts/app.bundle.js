webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('supaHot', ['ngRoute']);

	__webpack_require__(7);
	__webpack_require__(5);
	__webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	angular.module('supaHot')

	  .config(function($routeProvider) {

	    $routeProvider

	      .when('/', {

	        templateUrl: 'views/login.html',
	        controller: 'mainCtrl'

	      });

	  });


/***/ },
/* 6 */
/***/ function(module, exports) {

	angular.module('supaHot')

	  .controller('mainCtrl', function($scope) {

	    $scope.message = 'Hello world';

	  });


/***/ },
/* 7 */
/***/ function(module, exports) {

	// Initialize Firebase
	var config = {
	  apiKey: "AIzaSyAfcrNxvvDEGZ8hWuRgDMIl2bRIQ2cxQ7w",
	  authDomain: "yana-94940.firebaseapp.com",
	  databaseURL: "https://yana-94940.firebaseio.com",
	  storageBucket: "",
	};
	firebase.initializeApp(config);


/***/ }
]);