var express = require('express');
var fs = require('fs');
var cache = require('memory-cache');

var app = express();

var KeyManager = require('./models/keyManager').KeyManager;
var keyManager = new KeyManager();

cache.put('keyManager', keyManager);

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

app.get('/dog', function (req, res) {
  res.send('Hello world!');
});

app.listen(4000, function() {
  console.log('App listening on port 4000');
});

module.exports = app;
