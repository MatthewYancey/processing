var m = [];
var n_m = 30;
var sun;
var sky_speed = 500;
var sky_step = 0;

function setup() {
  b1_color = color(204, 72, 156);
  m_color = color(148, 149, 255);
  s_color = color(217, 88, 113)
  b1_color = [255, 0, 255];
  b2_color = [204, 142, 114];
  this_color = [0, 0, 0];

  createCanvas(640 * 2, 360 * 2);
  for (var i = 0; i < n_m; i++) {
    m[i] = new Mountains((width / n_m) * i);
  }
  sun = new Sun();
}

function draw() {
  
  this_color[0] = map(sky_step, 0, sky_speed, b1_color[0], b2_color[0]);
  this_color[1] = map(sky_step, 0, sky_speed, b1_color[1], b2_color[1]);
  this_color[2] = map(sky_step, 0, sky_speed, b1_color[2], b2_color[2]);
  background(this_color[0], this_color[1], this_color[2]);

  if (sky_step >= sky_speed){
    sky_step = 0;
    var temp_color = b2_color;
    b2_color = b1_color;
    b1_color = temp_color;
  } else {
    sky_step = sky_step + 1;
  }
  
  sun.update();
  for (var i = 0; i < n_m; i++) {
    m[i].update();
  }
}
