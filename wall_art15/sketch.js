var size = [1.5, 2.5];
var size_x = 220;
var inc = 0.01;

function setup() {
  createCanvas(size[0] * size_x, size[1] * size_x);
  pixelDensity(1);
}

function draw(){
  var yoff = 0;
  
  loadPixels();
  for (var y = 0; y < height; y++){
    var xoff = 0;
    for (var x = 0; x < width; x++){      
      var index = (x + y * width) * 4;
      var r = map(noise(xoff, yoff), 0, 1, 150, 255);
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      xoff += inc; 
    }
    yoff += inc;
  }
  updatePixels();


  for (var i = 0; i < people.length; i++){
    new Dash(people[i]);
  }


  noLoop();
}

