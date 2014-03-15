$(function () {

  var toggleDetails = function (cityBoxes, target) {
  cityBoxes.forEach(function(cityBox){
    cityBox.find('.' + target).click (function () {
        cityBox.find('.info_' + target).toggle()
    });
  });
};

var cityBoxes = [$('.city_one'), $('.city_two'), $('.city_three')];
toggleDetails (cityBoxes, 'activities');
toggleDetails (cityBoxes, 'restaurants');
toggleDetails (cityBoxes, 'directions');

var cityFactory = function (name, image_path){
  var image = new Image();
  image.src = image_path;
  $(image).addClass('city-picture');
  return {name: name, image:image};
};

var Prague = cityFactory("Prague", "/prague.jpeg");
var Rome = cityFactory("Rome", "/rome.jpeg");
var Amsterdam = cityFactory("Amsterdam", "/amsterdam.jpeg");
var Paris = cityFactory("Paris", "/paris.jpeg");
var Dublin = cityFactory("Dublin", "/dublin.jpeg");
var Athens = cityFactory("Athens", "/athens.jpeg");

var cities = [Prague, Rome, Amsterdam, Paris, Dublin, Athens];

for (var i=0; i<cityBoxes.length; i++) {
  var random_city = cities[Math.floor(Math.random() * cities.length)];
  cityBoxes[i].find('header').html(random_city.name).after(random_city.image);
  cities.splice(cities.indexOf(random_city), 1);
};

});


