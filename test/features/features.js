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
    browser.visit("http://localhost:3000", function(err) {
      assert.ok(browser.success);
      next();
    });
  });

  it("should store the set parameters", function(next) {
    browser.visit("http://localhost:3000/set?foo=bar", function(err) {
      assert.ok(browser.success);
      assert.equal(keyManager.items.foo, 'bar');
      next();
    });
  });

  it("should return existing set parameters", function(next) {
    browser.visit("http://localhost:3000/get?key=foo", function(err) {
      assert.ok(browser.success);
      browser.assert.text('body', 'bar');
      next();
    });
  });

  after(function(done) {
      this.server.close(done);
    });

});
