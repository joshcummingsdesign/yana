angular.module('yana', ['ngRoute', 'firebase']);

// Database
require('./database');

// Routes
require('./routes');

// Controllers
require('./controllers/auth.js');
require('./controllers/main.js');
