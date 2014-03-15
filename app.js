var express = require('express');
var app = express();
var ejs = require('ejs');


app.use('/resources', express.static(__dirname + '/resources'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res){
  res.render('start');
});

app.listen(3000);

