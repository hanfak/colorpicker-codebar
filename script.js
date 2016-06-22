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
  var colors = [ "22ac5e", "d68236", "770077",'blue' ];
  $.each(colors, function(index, word) {
  //  console.log('Position ' + index + ': ' + word);
   addBox(word);
 });

  $(document).on('keyup', '#color', function(){
   setPreviewColor($('#color').val());
  });

  $(document).on('click', '#add-to-favorite', function() {
    addBox(getColor());
    $('#color').val('');
  });

});
