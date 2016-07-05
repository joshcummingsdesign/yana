var express = require('express');

var app = express();

app.use('/', express.static('public'));

app.get('/:title', function(req, res) {
  var routes = ['/', 'account', 'notes', 'register', 'reset', 'sign-in'];
  var title = req.params.title;
  if (routes.indexOf(title) !== -1) {
    res.redirect('/#/' + title);
  } else {
    res.status(404).send('404 Not Found');
  }
});

app.get('*', function(req, res) {
  res.status(404).send('404 Not Found');
});

app.listen(8080);
