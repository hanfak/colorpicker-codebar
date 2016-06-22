/* Exercise 2: Color picker */

function setPreviewColor(color) {
  $(".preview").css('background-color', color);
}

function getColor(){
  return $(".preview").css('background-color');
}

$(document).ready(function() {
  $(document).on('keyup', '#color', function(){
   setPreviewColor($('#color').val());
  });
});
