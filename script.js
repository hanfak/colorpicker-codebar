/* Exercise 2: Color picker */
var colors = [ "22ac5e", "d68236", "770077",'blue' ];

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

function setInitialFav(){
  $.each(colors, function(index, word) {
    addBox(word);
  });
}

function setInitialPreview(){
  var index = Math.floor(Math.random()*colors.length);
  setPreviewColor(colors[index]);
}

$(document).ready(function() {
  setInitialFav();
  setInitialPreview();

  $(document).on('keyup', '#color', function(){
   setPreviewColor($('#color').val());
  });

  $(document).on('click', '#add-to-favorite', function() {
    addBox(getColor());
    $('#color').val('');
  });

});
