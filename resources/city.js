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

$.get('/random_cities').then(function (response) {
  var cities = response;

  cities = cities.map(function(city) {
    var image = new Image;
    image.src = city.image;
    return {name: city.name, image: image};
  });

  var cityBoxes = cities.map(function (city) {
    var cityBox = $('<div class="city"><header class="city-name"></header></div>');
    $(city.image).addClass('city-picture');
    cityBox.find('.city-name').html(city.name).after(city.image);
    return cityBox;
  });

  cityBoxes.forEach(function (cityBox) {
    $('.cities').append(cityBox);
  });
});


});


