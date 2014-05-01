$(function () {
  var templates = {
    city: Handlebars.compile($("#city-template").html()),
    attraction: Handlebars.compile($("#attraction-template").html())
  };

  $.get('/random_cities').then(function (response) {
    var cities = response;

    var cityBoxes = cities.map(function (city) {
      return templates.city(city);
    });

    cityBoxes.forEach(function (cityBox) {
      $('.cities').append(cityBox);
    });

    $.get('/attractions').then(function (response) {
      var attractions = response.map(function (attraction) {
        return templates.attraction({ name: attraction });
      });

      $('.attractions .list').append(attractions);
    });

    $('.attractions header').on('click', function () {
      $(this).closest('.attractions').find('.list').toggle();
    });
  });
});
