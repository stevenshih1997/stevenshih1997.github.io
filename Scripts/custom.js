$(document).ready(function() {
  $(".btn-about").click(function() {
    $('html,body').animate({
      scrollTop: $("#about-me").offset().top},'slow');
  });
});