var size = [1, 2.6];
var size_x = 220  ;
var dashes = []
var boarder = 5;
var default_age = 30;
var max_year = 2011;
var min_year = 1680; //true min is 1615

let slider_lower;
let slider_upper;
let slider_inc;
let slider_rlower;
let slider_rupper;
let slider_glower;
let slider_gupper;
let slider_blower;
let slider_bupper;
let slider_alower;
let slider_aupper;


function setup() {  
  createCanvas(size[0] * size_x, size[1] * size_x);
  background(255, 255, 255);
  // noise
  slider_inc = createSlider(0, 100, 50);
  slider_inc.position(width + 20, 10);

  // background
  slider_lower = createSlider(0, 255, 100);
  slider_lower.position(width + 20, 30);
  slider_upper = createSlider(0, 255, 200);
  slider_upper.position(slider_lower.x + slider_lower.width + 20, 30);

  // red
  slider_rlower = createSlider(0, 255, 150);
  slider_rlower.position(width + 20, 50);
  slider_rupper = createSlider(0, 255, 255);
  slider_rupper.position(slider_rlower.x + slider_rlower.width + 20, slider_rlower.y);

  // green
  slider_glower = createSlider(0, 255, 150);
  slider_glower.position(width + 20, 70);
  slider_gupper = createSlider(0, 255, 255);
  slider_gupper.position(slider_glower.x + slider_glower.width + 20, slider_glower.y);

  // blue
  slider_blower = createSlider(0, 255, 150);
  slider_blower.position(width + 20, 90);
  slider_bupper = createSlider(0, 255, 255);
  slider_bupper.position(slider_blower.x + slider_blower.width + 20, slider_blower.y);

  // alpha
  slider_alower = createSlider(0, 255, 150);
  slider_alower.position(width + 20, 110);
  slider_aupper = createSlider(0, 255, 255);
  slider_aupper.position(slider_alower.x + slider_alower.width + 20, slider_alower.y);


  // lines
  for (var i = 0; i < dates.length; i++){
    dashes[i] = new Dash(dates[i]);
  }

}

function draw() {
  // background
  let lower_bound = slider_lower.value();
  let upper_bound = slider_upper.value();
  let inc = map(slider_inc.value(), 0, 100, 0.0005, 0.05);
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
