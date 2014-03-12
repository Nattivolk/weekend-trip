var prague_image = new Image();
prague_image.src = "/prague.jpeg";

var rome_image = new Image();
rome_image.src = "/rome.jpeg";

var amsterdam_image = new Image();
amsterdam_image.src = "/amsterdam.jpeg";

var paris_image = new Image();
paris_image.src = "/paris.jpeg";

var dublin_image = new Image();
dublin_image.src = "/dublin.jpeg";

var athens_image = new Image();
athens_image.src = "/athens.jpeg";

var city1 = {};
city1.name = "Prague";
city1.image = prague_image;

var city2 = {};
city2.name = "Rome";
city2.image = rome_image;

var city3 = {};
city3.name = "Amsterdam";
city3.image = amsterdam_image;

var city4 = {};
city4.name = "Paris";
city4.image = paris_image;

var city5 = {};
city5.name = "Dublin";
city5.image = dublin_image;

var city6 = {};
city6.name = "Athens";
city6.image = athens_image;

var cities = [city1, city2, city3, city4, city5, city6];
var city_boxes = [$('.city_one'), $('.city_two'), $('.city_three')];

// var random_city1 = cities[Math.floor(Math.random() * cities.length)];
// var random_city2 = cities[Math.floor(Math.random() * cities.length)];
// var random_city3 = cities[Math.floor(Math.random() * cities.length)];
// var random_city_array = [];

for (var i=0; i<city_boxes.length; i++) {
	var random_city = cities[Math.floor(Math.random() * cities.length)]
	city_boxes[i].html(random_city.name).after(random_city.image)
	city_boxes[i].next().addClass('city-picture')
	cities.splice(random_city, 1)
};

