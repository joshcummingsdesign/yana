var express = require('express');

var app = express();

app.use('/', express.static('public'));

app.get('/:title', function(req, res) {
  var url = '/#/' + req.params.title;
  res.redirect(url);
});

app.listen(3000, function() {
  console.log('The server is running on port 3000...');
});
