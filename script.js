/* Exercise 2: Color picker */

function setPreviewColor(color) {
  $(".preview").css('background-color', color);
  $(".color-code").text(getColor());
}

function getColor(){
  return $(".preview").css('background-color');
}

function addBox(color) {
  var boxDiv = "<div class='item' style='background-color: " + color + "'></div>";
  $("#colors").prepend(boxDiv);
}

$(document).ready(function() {
  $(document).on('keyup', '#color', function(){
   setPreviewColor($('#color').val());
  });
});
