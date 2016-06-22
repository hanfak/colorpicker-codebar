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

function removeLasFav(){
  var favsCount = $("#colors .item").length;
  if(favsCount >=16){
    var lastFav = $("#colors .item:last-child");
    lastFav.remove();
  }
}

function addToFav(){
  addBox(getColor());
  removeLasFav();
  $('#color').val('');
  $('#color').focus();
}

$(document).ready(function() {
  setInitialFav();
  setInitialPreview();
  $('#color').focus();

  $(document).on('keyup', '#color', function(){
   setPreviewColor($('#color').val());
  });

  $(document).on('click', '#add-to-favorite', addToFav);

  $(document).on('mouseenter', ".item", function(){
    var previewColor  = getColor();
    setPreviewColor($(this).css("background-color"));
  });
});
