var vbars = [];
var n_vbars = 10;
var bars = [];
var n_bars = 8;


function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < n_vbars; i++) {
    vbars[i] = new Vbar();
  }

  for (var i = 0; i < n_bars; i++) {
    bars[i] = new Bar(30 * i);
  }

}

function draw() {
  background(5, 5, 5);
  for (var i = 0; i < vbars.length; i++) {
    vbars[i].show();
  }

  translate(width / 2, height / 2);
  for (var i = 0; i < bars.length; i++) {
    bars[i].update();
  }
}
