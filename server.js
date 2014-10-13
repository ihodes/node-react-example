require('node-jsx').install({extension: '.jsx'});
var express = require('express'),
    React = require('react'),
    comp = require('./components');


var app = express();


app.get('/', function(req, res){
  res.send(React.renderComponentToString(comp.Root()));
});


var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
