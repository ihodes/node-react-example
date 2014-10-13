require('node-jsx').install({extension: '.jsx', harmony: true});

var express = require('express'),
    React = require('react'),
    comp = require('./components');


var app = express();
app.set('views', './views')
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.use(express.static(__dirname));


app.get('/', function(req, res){
  var Root = comp.Root({date: Date()});
  res.render('index', {initialView: React.renderComponentToString(Root)});
});


var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
