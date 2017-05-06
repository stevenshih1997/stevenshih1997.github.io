$(document).ready(function() {
  setTimeout(function(){
          $(".code").typed({
              strings: ["brew install mac<br>brew list<br>brew install"],
              typeSpeed: 30, // typing speed
              backDelay: 750, // pause before backspacing
              loop: true, // loop on or off (true or false)
              loopCount: false, // number of loops, false = infinite
              showCursor: false,
              callback: function(){ } // call function after typing is done
          });
      }, 0);

});