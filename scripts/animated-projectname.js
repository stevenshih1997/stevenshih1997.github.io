/**
 * http://stackoverflow.com/questions/29911143/how-can-i-animate-the-drawing-of-text-on-a-web-page
 */

var ctx = document.querySelector("canvas").getContext("2d"),
    dashLen = 220, dashOffset = dashLen, speed = 15,
    txt = "Projects", x = 30, i = 0;

ctx.font = "60px Shrikhand, cursive, TSCu_Comic, sans-serif"; 
ctx.lineWidth = 1.5; ctx.lineJoin = "round"; ctx.globalAlpha = 2.5/3;
ctx.strokeStyle = ctx.fillStyle = "#ffffff";

window.onload = function() {
  (function loop() {
    ctx.clearRect(x, 0, 60, 150);
    ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
    dashOffset -= speed;                                         // reduce dash length
    ctx.strokeText(txt[i], x, 90);                               // stroke letter

    if (dashOffset > 0) requestAnimationFrame(loop);             // animate
    else {
      ctx.fillText(txt[i], x, 90);                               // fill final letter
      dashOffset = dashLen;                                      // prep next char
      x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
      ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
      ctx.rotate(Math.random() * 0.005);                         // random rotation
      if (i < txt.length) requestAnimationFrame(loop);
    }
  })();
};

