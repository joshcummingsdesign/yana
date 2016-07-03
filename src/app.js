angular.module('yana', ['ngRoute', 'firebase']);

// Database
require('./database');

// Factories
require('./factories/auth.js');

// Controllers
require('./controllers/auth.js');
require('./controllers/main.js');

// Routes
require('./routes');
