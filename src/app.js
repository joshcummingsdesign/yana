angular.module('yana', ['ngRoute', 'firebase']);

// Database
require('./database');

// Controllers
require('./controllers/auth.js');
require('./controllers/main.js');

// Routes
require('./routes');
