/* Exercise 2: Color picker */


$(document).ready(function() {
  $(".preview").css('background-color', 'purple');

  $(document).on('click', '.preview', function() {
    $(".preview").css('background-color', 'red');
  });
});
