var express = require('express');
var app = exports.app = express();

app.get('/', function(req, res){
  res.json({
    foo: 'hello world'
  });
});

require('http').createServer(app).listen(3000, function(){
  console.log('Running');
});
