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