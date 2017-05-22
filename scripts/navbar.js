$(document).ready(function() {
  $hoverNav = true;
  $("#header").headroom(); // Initialize Headroom.js Navbar
  adjustNav(); // Adjust navbar to be responsive
  $(window).resize(adjustNav);
  /* Multi-function about button */
  $(".btn-about").click(function() {
    if (window.location.pathname === '/') {
      console.log("scroll down to about");
      $('html,body').animate({
        scrollTop: $("#about-me").offset().top},'slow');
    } else {
      console.log("Redirect to Home page");
      document.location.href="/";
    }
  });
  /* Show/hide text on mouseover for about button */
  $(".btn-about").mouseenter(function() {
    if($hoverNav)
      $(".hover-about").show();
  });
  $(".btn-about").mouseleave(function() {    
    if($hoverNav)
      $(".hover-about").hide();
  });
  /* Show/hide text on mouseover for resume button */
  $(".btn-resume").mouseenter(function() {
    if($hoverNav)
      $(".hover-resume").show();
  });
  $(".btn-resume").mouseleave(function() {
    if($hoverNav)
      $(".hover-resume").hide();
  });
  /* Show/hide text on mouseover for projects button */
  $(".btn-projects").mouseenter(function() {
    if($hoverNav)
      $(".hover-projects").show();
  });
  $(".btn-projects").mouseleave(function() {
    if($hoverNav)
      $(".hover-projects").hide();
  });
  /* Show/hide text on mouseover for contact button */
  $(".btn-contact").mouseenter(function() {
    if($hoverNav)
      $(".hover-contact").show();
  });
  $(".btn-contact").mouseleave(function() {
    if($hoverNav)
      $(".hover-contact").hide();
  });
  /**
   * Function to adjust navbar, which shows text when window is at a certain size
   * @return None
   */
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