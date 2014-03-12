// $(document).ready(function() {
  
//   $("div").click(function() {
//    var i = $( "div" ).index(this);
//    $('.activities').eq(i).click(function() {
//      $('.info_activities').eq(i).toggle()
//    });
//   });
  
// });

$(document).ready(function() {
  var activities = [0,1,2];
  activities.forEach(function(activity){
    $('.activities').eq(activity).click(function() {
        $('.info_activities').eq(activity).toggle()
    });  
  });

  var restaurants = [0,1,2];
  restaurants.forEach(function(restaurant){
    $('.restaurants').eq(restaurant).click(function() {
        $('.info_restaurants').eq(restaurant).toggle()
    });  
  });

  var directions = [0,1,2];
  directions.forEach(function(direction){
    $('.directions').eq(direction).click(function() {
        $('.info_directions').eq(direction).toggle()
    });  
  });
});

// var cities = ['Prague', 'Rome', 'Amsterdam', 'Paris', 'Dublin', 'Athens'];
// var city_pictures = ['prague.jpeg', 'rome.jpeg', 'amsterdam.jpeg', 'paris.jpeg', 'dublin.jpeg', 'athens.jpeg'];

// $('.city_one').html(cities[Math.floor(Math.random() * cities.length)]);
// $('.city_two').html(cities[Math.floor(Math.random() * cities.length)]);
// $('.city_three').html(cities[Math.floor(Math.random() * cities.length)]);


// $('.city_one').after('<img class="city-picture" src="prague.jpeg" />');
// $('.city_two').after('<img class="city-picture" src="/rome.jpeg" />');
// $('.city_three').after('<img class="city-picture" src="/amsterdam.jpeg" />');



