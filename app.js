var express = require('express');
var app = express();
var ejs = require('ejs');
var _ = require('lodash');


app.use('/resources', express.static(__dirname + '/resources'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates');

app.get('/', function(req, res){
  res.render('start');
});

app.get('/random_cities', function(req,res) {
  var shuffledCities = _.sortBy(cities, function () { return Math.random(); });

  res.json(_.first(shuffledCities, 3));
});



var cityFactory = function (name, image_path){
  image_path = "/resources" + image_path;
  return {name: name, image:image_path};
};

var Prague = cityFactory("Prague", "/prague.jpeg");
var Rome = cityFactory("Rome", "/rome.jpeg");
var Amsterdam = cityFactory("Amsterdam", "/amsterdam.jpeg");
var Paris = cityFactory("Paris", "/paris.jpeg");
var Dublin = cityFactory("Dublin", "/dublin.jpeg");
var Athens = cityFactory("Athens", "/athens.jpeg");

var cities = [Prague, Rome, Amsterdam, Paris, Dublin, Athens];

app.listen(3000);