angular.module('yana', ['ngRoute']);

// Database
require('./database');

// Routes
require('./routes');

// Controllers
require('./controllers/home.js');
require('./controllers/register.js');
require('./controllers/sign-in.js');
require('./controllers/password.js');
require('./controllers/main.js');
