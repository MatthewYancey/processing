// var drops = [];
var bars = [];

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 2; i++) {
    bars[i] = new Bar();
  }
}

function draw() {
  background(230, 230, 250);
  // strokeWeight(20);
  // stroke(138, 43, 226);
  // line(20, 20, 100, 100);


  for (var i = 0; i < bars.length; i++) {
    bars[i].show();
  }
}
