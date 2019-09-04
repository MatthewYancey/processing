var n_bars = 30;
var bars = [];

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < n_bars; i++) {
    bars[i] = new Bar(random(0, width/2));
  }

}

function draw() {
  background(5, 5, 5);
  translate(width / 2, height / 2);
  for (var i = 0; i < bars.length; i++) {
    bars[i].update();
  }
}
