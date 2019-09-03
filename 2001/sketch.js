var v_bars = [];
var h_bars = [];
var n_h_bars = 0;
var n_v_bars = 2;

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < n_h_bars; i++) {
    h_bars[i] = new H_bar();
  }
  var angle_inc = 140 / n_v_bars;
  for (var i = 0; i < n_v_bars; i++) {
    var angle = 20 + (angle_inc * i);
    print(angle);
    v_bars[i] = new V_bar(angle);
  }
}

function draw() {
  background(5, 5, 5);
  for (var i = 0; i < h_bars.length; i++) {
    h_bars[i].show();
  }

  for (var i = 0; i < v_bars.length; i++) {
    v_bars[i].show();
  }

  // for (var i = 0; i < v_bars.length; i++) {
  //   v_bars[i].show();
  // }

}
