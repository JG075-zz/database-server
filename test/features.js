var assert = require('assert');
var Browser = require('zombie');
var url = "http://localhost:3000";
var browser = new Browser();

var http = require('http');
var app = require('../server');

describe("App", function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);
  });

  it("should have defined headless browser", function(next){
    assert.ok(browser != "undefined");
    assert(browser instanceof Browser);
    next();
  });

  it("should visit the site", function(next) {
    browser.visit(url, function(err) {
      assert.ok(browser.success);
      next();
    });
  });

  it("should visit the get route", function(next) {
    browser.visit("http://localhost:3000/set", function(err) {
      assert.ok(browser.success);
      next();
    });
  });

  after(function(done) {
      this.server.close(done);
    });

});
