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
});

$(document).ready(function() {
  var restaurants = [0,1,2];
  restaurants.forEach(function(restaurant){
    $('.restaurants').eq(restaurant).click(function() {
        $('.info_restaurants').eq(restaurant).toggle()
    });  
  });
});

$(document).ready(function() {
  var directions = [0,1,2];
  directions.forEach(function(direction){
    $('.directions').eq(direction).click(function() {
        $('.info_directions').eq(direction).toggle()
    });  
  });
});