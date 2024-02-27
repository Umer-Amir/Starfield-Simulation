let fps;

function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function () {
    // for (let i = 0; i < 2500; i++) {
    //   numofStars--;
    // }
    this.z = this.z - speed;
    if (this.z > 3000) {
      // numOfStars--;
      // ellipse(this.z, 0, width, 1, 100);
      this.z = width;
      this.x = random(-width * 1.5, width * 1.5);
      this.y = random(-height * 1.5, height * 1.5);
      this.pz = this.z;
    }
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width * 1.5, width * 1.5);
      this.y = random(-height * 1.5, height * 1.5);
      this.pz = this.z;
    }
  };

  this.show = function () {
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 1, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);
    fps = frameRate();
  };
}
