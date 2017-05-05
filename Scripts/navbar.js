$(document).ready(function() {
  $hoverNav = true;
  $("#header").headroom();
  adjustNav();
  $(window).resize(adjustNav);

  $(".btn-about").mouseenter(function() {
    if($hoverNav)
      $(".hover-about").show();
  });
  $(".btn-about").mouseleave(function() {    
    if($hoverNav)
      $(".hover-about").hide();
  });

  $(".btn-resume").mouseenter(function() {
    if($hoverNav)
      $(".hover-resume").show();
  });
  $(".btn-resume").mouseleave(function() {
    if($hoverNav)
      $(".hover-resume").hide();
  });

  $(".btn-projects").mouseenter(function() {
    if($hoverNav)
      $(".hover-projects").show();
  });
  $(".btn-projects").mouseleave(function() {
    if($hoverNav)
      $(".hover-projects").hide();
  });

  $(".btn-contact").mouseenter(function() {
    if($hoverNav)
      $(".hover-contact").show();
  });
  $(".btn-contact").mouseleave(function() {
    if($hoverNav)
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