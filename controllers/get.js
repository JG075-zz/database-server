var cache = require('memory-cache');

module.exports.controller = function(app) {

  app.get('/get', function(req, res) {
    keyManager = cache.get('keyManager');
    var keyValue = req.query[Object.keys(req.query)];
    res.send(keyManager.items[keyValue]);
  });

};
