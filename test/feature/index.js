var http = require("http");
var assert = require('assert');
var Browser = require("zombie");
var app = require('../../server');
var url = "http://localhost:4000";
var browser = new Browser();

describe("User visits index", function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);
  });

  it("should load successfully", function() {
      browser.visit(url, function(err) {
          browser.visit(url, function(err) {
            assert.ok(browser.success);
          });
      });
  });

  after(function(done) {
    this.server.close(done);
  });

});
