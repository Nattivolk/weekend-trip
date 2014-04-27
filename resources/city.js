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

var templates = {
  city: Handlebars.compile($("#city-template").html())

};

$.get('/random_cities').then(function (response) {
  var cities = response;

  var cityBoxes = cities.map(function (city) {
    return templates.city(city);
  });

  cityBoxes.forEach(function (cityBox) {
    $('.cities').append(cityBox);
  });
});


});
