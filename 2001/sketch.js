// var drops = [];
var h_bars = [];
var n_h_bars = 4;

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < n_h_bars; i++) {
    h_bars[i] = new H_bar();
  }
}

function draw() {
  background(5, 5, 5);
  for (var i = 0; i < h_bars.length; i++) {
    h_bars[i].show();
  }
}
