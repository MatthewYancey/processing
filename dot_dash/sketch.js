// var drops = [];
var dots = [];
var n_dots = 20;

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < n_dots; i++) {
    dots[i] = new Dot();
  }
}

function draw() {
  background(220, 220, 220);
  for (var i = 0; i < dots.length; i++) {
    dots[i].show();
  }

  

  // randomly selects a dot to jump to 
  // dots[10].ping();


}
