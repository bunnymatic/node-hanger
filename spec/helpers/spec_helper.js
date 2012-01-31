var path = require('path');
var http = require('http');

var server_cfg = { port:3131,
                   host: '127.0.0.1',
                   base: function() {
                     return 'http://' + this.host + ':' + this.port;
                   }
                 };



whenPageHasLoaded = function(z,callback) {
  browser = new z.Browser();
  callback(browser);
};

visitLocalPage = function(browser, path, cb) {
  uri = server_cfg.base() + path;
  browser.visit(uri, function(err, browser, status) {
    expect(err).toBeFalsy();
    expect(status).toBe(200);
    cb(browser);
  });
};

test_server = server_cfg;
var server = require('../../node_hanger')(process.env.NODE_ENV);
server.listen(test_server.port, test_server.host);

