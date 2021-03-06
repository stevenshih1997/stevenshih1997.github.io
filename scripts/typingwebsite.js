/**
 * Uses Typed.js library to simulate typing code. Used in projects.html Editor.svg
 * @return None
 */
$(document).ready(function() {
  setTimeout(function(){
          $(".websitecode").typed({
              strings: ["<section id='about-me'>\n  <div class='container'>\n   <div class='row'>\n    <div class='col-md-12'>\n     <article>\n      <h2>Hello.</h2>\n      <p>I am a computer engineering \n         student at the \n         University of British \n         Columbia.</p>\n     </article>\n    </div>\n   </div>\n  </div>\n</section>"],
              contentType: 'text', 
              typeSpeed: 30, // typing speed
              backDelay: 750, // pause before backspacing
              loop: true, // loop on or off (true or false)
              loopCount: false, // number of loops, false = infinite
              showCursor: false,
              callback: function(){ } // call function after typing is done
          });
      }, 0);

});