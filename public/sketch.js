var stars = [];

var speed;

numOfStars = 2500;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  for (var i = 0; i < numOfStars; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, -30, 30);
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }

  textSize(16);
  fill(255);
  noStroke();

  text("FPS: " + fps.toFixed(2), 800, -450);
  //   text("FPS: " + numOfStars.toFixed(2), 800, -300);

  const meImage = new Image();
  meImage.src = "images/ME.png";
  meImage.style.position = "fixed";
  meImage.style.left = "1750px";
  meImage.style.bottom = "0px";
  meImage.style.width = "100px";
  meImage.style.height = "auto";
  meImage.style.zIndex = "10";
  document.body.appendChild(meImage);
}
