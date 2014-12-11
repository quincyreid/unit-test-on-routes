var express = require('express');
var app = express();
var routes = require('./routes.js');

app.use(routes);

var server = function(){
  require('http').createServer(app).listen(3000, function(){
     console.log('Running');
  });
};

module.exports = server;
if (!module.parent) {
  server();
}
