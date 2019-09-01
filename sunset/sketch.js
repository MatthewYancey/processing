
var clouds = [];
var n_clouds = 3;
var waves = [];
var n_waves = 10;

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < n_clouds; i++) {
    clouds[i] = new Cloud();
  }

  // calculates the starting positions of the waves
  for (var i = 0; i < n_waves; i++) {
    waves[i] = new Waves(map(i, 1, n_waves, height - (height / 3), height));
  }

  ocean = new Ocean();
  sun = new Sun();
}

function draw() {
  background(242, 187, 197);

  // makes the sun
  sun.make_sun();

  // makes the ocean
  ocean.show();

  // sun refelction
  sun.reflection();

  // makes the waves
  for (var i = 0; i < n_waves; i++) {
    waves[i].update();
  }

  // makes the clouds
  for (var i = 0; i < n_clouds; i++) {
    clouds[i].show();
    clouds[i].update();
  }

}
