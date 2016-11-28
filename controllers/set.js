var cache = require('memory-cache');

module.exports.controller = function(app) {

  app.get('/set', function(req, res) {
    keyManager = cache.get('keyManager');
    keyManager.items[Object.keys(req.query)] = req.query[Object.keys(req.query)];
    res.send('');
  });

};
