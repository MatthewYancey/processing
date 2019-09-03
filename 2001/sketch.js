var vbars = [];
var n_vbars = 0;
var bars = [];
var n_bars = 1;


function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < n_vbars; i++) {
    vbars[i] = new Vbar();
  }

  for (var i = 0; i < n_bars; i++) {
    bars[i] = new Bar();
  }

  // var angle_inc = 140 / n_v_bars;
  // for (var i = 0; i < n_v_bars; i++) {
  //   var angle = 20 + (angle_inc * i);
  //   print(angle);
  //   v_bars[i] = new V_bar(angle);
  // }
}

function draw() {
  background(5, 5, 5);
  for (var i = 0; i < vbars.length; i++) {
    vbars[i].show();
  }

  for (var i = 0; i < bars.length; i++) {
    bars[i].update();
  }



  // for (var i = 0; i < v_bars.length; i++) {
  //   v_bars[i].show();
  // }

  // for (var i = 0; i < v_bars.length; i++) {
  //   v_bars[i].show();
  // }

}
