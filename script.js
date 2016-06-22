/* Exercise 2: Color picker */

function setPreviewColor(color) {
  $(".preview").css('background-color', color);
}

// get input value
// $('#color').val()

$(document).ready(function() {
  $(document).on('keyup', '#color', function(){
   setPreviewColor($('#color').val());
  });
});
