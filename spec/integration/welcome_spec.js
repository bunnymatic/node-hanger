require('../helpers/spec_helper');

var jasmine = require('jasmine-node');
var Browser = require('zombie');

describe('welcome', function() {
  it('loads the home page', function() {
    var b = new Browser();
    var uri = test_server.base() + "/";
    b.visit(uri, function(err, browser, status) {
      expect(b.html('header h1')).toMatch("Hang Me Up!");
      jasmine.asyncSpecDone();
    });
    jasmine.asyncSpecWait();
  });
});
