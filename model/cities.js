var cityFactory = function (name, image_path) {
  image_path = "/resources" + image_path;
  return { name: name, image: image_path };
};

var Prague = cityFactory('Prague', '/prague.jpeg');
var Rome = cityFactory('Rome', '/rome.jpeg');
var Amsterdam = cityFactory('Amsterdam', '/amsterdam.jpeg');
var Paris = cityFactory('Paris', '/paris.jpeg');
var Dublin = cityFactory('Dublin', '/dublin.jpeg');
var Athens = cityFactory('Athens', '/athens.jpeg');

var cities = [ Prague, Rome, Amsterdam, Paris, Dublin, Athens ];

module.exports = {
  all: cities
};