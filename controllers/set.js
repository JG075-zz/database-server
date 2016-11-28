module.exports.controller = function(app) {
  app.get('/set', function(req, res) {
    keyManager.items[Object.keys(req.query)] = req.query[Object.keys(req.query)];
    res.send('');
  });

};
