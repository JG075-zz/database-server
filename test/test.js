var assert = require('assert');
var KeyManager = require('../models/keyManager').KeyManager;

describe('keyManager', function() {

  it('should be initialised with an empty items object', function() {
    keyManager = new KeyManager();
    console.log(keyManager.items);
    assert(keyManager.items instanceof Object);
    assert.equal(Object.keys(keyManager.items).length, 0);
  });
  
});
