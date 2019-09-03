// var drops = [];
var dots = [];
var n_dots = 20;
var dash;

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < n_dots; i++) {
    dots[i] = new Dot();
  }
  dash = new Dash(dots);
}

function draw() {
  background(220, 220, 220);
  for (var i = 0; i < dots.length; i++) {
    dots[i].show();
  }

  dash.show();
  // fill(0, 0, 0);
  // noStroke();
  // circle(100, 100, 100);
  // print("setup")

}
