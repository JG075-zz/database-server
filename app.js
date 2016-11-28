var express = require('express');
var fs = require('fs');

var app = express();

// dynamically include routes (Controller)
fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.listen(4000, function() {
  console.log('App listening on port 4000');
});

module.exports = app;
