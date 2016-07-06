angular.module('yana', ['ngRoute', 'firebase', 'localytics.directives']);

// Database
require('./database');

// Directives
require('./directives/icheck.js');

// Factories
require('./factories/auth.js');
require('./factories/routeHelper.js');

// Controllers
require('./controllers/auth.js');
require('./controllers/main.js');

// Routes
require('./routes');
