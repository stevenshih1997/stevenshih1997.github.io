$(document).ready(function() {
  $("#header").headroom();
  adjustNav();
  $(window).resize(adjustNav);

  $(".btn-about").mouseenter(function() {
    $(".hover-about").show();
  });
  $(".btn-about").mouseleave(function() {
    $(".hover-about").hide();
  });

  $(".btn-resume").mouseenter(function() {
    $(".hover-resume").show();
  });
  $(".btn-resume").mouseleave(function() {
    $(".hover-resume").hide();
  });

  $(".btn-projects").mouseenter(function() {
    $(".hover-projects").show();
  });
  $(".btn-projects").mouseleave(function() {
    $(".hover-projects").hide();
  });

  $(".btn-contact").mouseenter(function() {
    $(".hover-contact").show();
  });
  $(".btn-contact").mouseleave(function() {
    $(".hover-contact").hide();
  });
  
  function adjustNav () {
  if ( $(window).width() < 1024 ) {
    $hoverNav = false;
    $(".hover-hide").show();
  } else {
    $hoverNav = true;
    $(".hover-hide").hide();
  }
}
});