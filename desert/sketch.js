var m = [];
var n_m = 30;
var sun;
var sky_speed = 10;
var sky_step = 0;

function setup() {
  b1_color = color(204, 72, 156);
  m_color = color(148, 149, 255);
  s_color = color(217, 88, 113)
  // b_color = color(255, 0, 255);
  b2_color = color(204, 142, 114);

  createCanvas(640 * 2, 360 * 2);
  for (var i = 0; i < n_m; i++) {
    m[i] = new Mountains((width / n_m) * i);
  }
  sun = new Sun();
}

function draw() {
  
  


  background(b_color);
  
  if (sky_step == sky_speed){
    sky_step = 0;
  } else {
    sky_step = sky_step + 1;
  }
  
  sun.update();
  for (var i = 0; i < n_m; i++) {
    m[i].update();
  }
}
