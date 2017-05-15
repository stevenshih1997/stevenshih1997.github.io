/**
 * Uses Typed.js library to simulate typing code. Used in index.html macbook.svg
 * @return None
 */
$(document).ready(function() {
  setTimeout(function(){
          $(".code").typed({
              strings: ["import React from 'react';\nclass Main extends React.Component {\n  render() {\n    return (\n      <div>\n        Hello!\n      </div>\n    );\n  }\n}\n\nexport default Main;"],
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