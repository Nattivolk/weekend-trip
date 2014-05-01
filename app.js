console.log('starting weekend-trip...');

var express = require('express');
var app = express();
var ejs = require('ejs');
var _ = require('lodash');
var templatesPath = __dirname + '/templates';
var resourcesPath = __dirname + '/resources';
var resourcesUrlPrefix = '/resources';

console.log('=> serving static files under url', resourcesUrlPrefix, 'using files inside', resourcesPath);
app.use(resourcesUrlPrefix, express.static(resourcesPath));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

console.log('=> using', templatesPath, 'for ejs templates');
app.set('views', templatesPath);

var attractions = require('./model/attractions');
var cities = require('./model/cities');

app.get('/', function(req, res){
  res.render('start');
});

app.get('/random_cities', function (req,res) {
  var randomOrder = Math.random.bind(Math);
  res.json(
    _(cities.all).sortBy(randomOrder).first(3).value()
  );
});

app.get('/attractions', function(req, res) {
  req.query.city;
  res.json(attractions.all);
});


console.log('listening on port 3000...\nhave fun!');
app.listen(3000);