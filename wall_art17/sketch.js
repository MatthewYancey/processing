var size = [1.5, 3];
var size_x = 200;
var inc = 0.005;
var noise_range = [160, 240];

function setup() {
  createCanvas(size[0] * size_x, size[1] * size_x);
  background(255, 255, 255);
}

function draw() {
  // background
  var yoff = 0;
  loadPixels();
  for (var y = 0; y < height; y++){
    var xoff = 0;
    for (var x = 0; x < width; x++){      
      var index = (x + y * width) * 4;
      var r = map(noise(xoff, yoff), 0, 1, noise_range[0], noise_range[1]);
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      xoff += inc; 
    }
    yoff += inc;
  }
  updatePixels();


  // lines
  for (var i = 0; i < dates.length; i++){
    new Dash(dates[i])
  }
  noLoop();
}
