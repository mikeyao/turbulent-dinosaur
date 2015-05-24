var express = require('express');
var resumeParser = require('./resumeParser.js');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/test', function(req, res){
  resumeParser.test(req,res);
});

app.get('/resume', function(req, res){
  resumeParser.readResume(req,res);
});

app.get('/skills', function(req, res){
  resumeParser.skills(req,res);
});

app.get('/countSkills', function(req, res){
  resumeParser.countSkills(req,res);
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});