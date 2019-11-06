var dashes = [];
var n_dots = 20;
var dash;

function setup() {
  createCanvas(400, 700);
  background(220, 220, 220);
  for (var i = 0; i < dates.length; i++){
      dashes[i] = new Dash(dates[i])
    }
  }
  
  // function draw() {
  //   background(220, 220, 220);
  //   for (var i = 0; i < dashes.length; i++) {
  //     dashes[i].show();
  //   }
  // }
