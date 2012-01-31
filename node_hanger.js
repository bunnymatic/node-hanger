// coalitions.js
// The coalitions.us.org application main.

function createApplication(env) {
  if (!env) {
    env = 'development';
  }

  var util = require('util');
  var express = require('express');
  
  var app = express.createServer(
    express.bodyParser()
  );
  app.set('env', env);

  // Configuration
  
  app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    if (env !== 'test') {
      // The logger must be inserted before bodyParser to be useful.
      app.use(express.logger('\x1b[33m:method\x1b[0m \x1b[32m:url\x1b[0m :response-time'));
    }
    app.use(express.methodOverride());
    app.use(app.router);
  });

  app.get('/', function (req, res) {
    res.render('home', { navSection: 'home' });
  });
  return app;
}

var port = process.env.PORT || 3000;
if (require.main === module)
{
  var app = module.exports = createApplication(process.env.NODE_ENV);
  var oneDay = 86400000;
  app.listen(port);
  console.log("server listening on port %d in %s mode", app.address().port, app.settings.env);
}
else
{
  module.exports = createApplication;
}
