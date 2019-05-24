const videocat = document.querySelector("#videocat");
const videodog = document.querySelector("#videodog");
const canvas1 = document.querySelector("#canvas1");
const canvas2 = document.querySelector("#canvas2");
const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");

var size = 0;
var lastDate = new Date();
var t = 0;
var i = 1;
var flip = true;

function drawFrame1() {
  t = (new Date().getTime() - lastDate.getTime()) / 1000;
  lastDate = new Date();

  size += t * i;

  if (size >= 1) {
    size = 1;
    i *= -1;
  } else if (size <= 0) {
    size = 0;
    i *= -1;
  }

  ctx1.drawImage(videocat, 0, 0, 500, 400);

  ctx1.drawImage(videodog, 250 - 250 * size, 200 - 200 * size, 500 * size, 400 * size);

  requestAnimationFrame(drawFrame1);
}

function drawFrame2() {
  flip = !flip;

  if (flip) {
    ctx2.drawImage(videocat, 0, 0, 500, 400);
  } else {
    ctx2.drawImage(videodog, 0, 0, 500, 400);
  }

  requestAnimationFrame(drawFrame2);
}

drawFrame1();
drawFrame2();
