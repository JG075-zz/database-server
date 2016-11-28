describe("App", function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);
  });

  it("should have defined headless browser", function(next){
    assert.ok(browser != "undefined");
    assert(browser instanceof Browser);
    next();
  });

  after(function(done) {
      this.server.close(done);
    });
});
