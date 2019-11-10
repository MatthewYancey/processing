var size = [1, 2.6];
var size_x = 320;
var dashes = []
var boarder = 5;
var default_age = 30;
var max_year = 2011;
var min_year = 1680; //true min is 1615

let slider_lower;
let slider_upper;
let slider_inc;


function setup() {  
  createCanvas(size[0] * size_x, size[1] * size_x);
  background(255, 255, 255);
  
  slider_lower = createSlider(0, 255, 100);
  slider_lower.position(width + 20, 10);
  text('red', rSlider.x * 2 + rSlider.width, 35);

  slider_upper = createSlider(0, 255, 200);
  slider_upper.position(width + 20, 30);
  text('green', gSlider.x * 2 + gSlider.width, 65);

  slider_inc = createSlider(0, 100, 50);
  slider_inc.position(width + 20, 50);
  text('blue', bSlider.x * 2 + bSlider.width, 95);


  // lines
  for (var i = 0; i < dates.length; i++){
    dashes[i] = new Dash(dates[i]);
  }

}

function draw() {
  // background
  let lower_bound = slider_lower.value();
  let upper_bound = slider_upper.value();
  let inc = map(slider_inc.value(), 0, 100, 0.0005, 0.01);
  var yoff = 0;

  loadPixels();
  for (var y = 0; y < height; y++){
    var xoff = 0;
    for (var x = 0; x < width; x++){      
      var index = (x + y * width) * 4;


      var r = map(noise(xoff, yoff), 0, 1, lower_bound, upper_bound);
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
      xoff += inc; 
    }
    yoff += inc;
  }
  updatePixels();

  for (var i = 0; i < dashes.length; i++){
    dashes[i].show();
  }

}
