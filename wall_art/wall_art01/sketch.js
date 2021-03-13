var dashes = [];
var n_dots = 20;
var dash;

function setup() {
  createCanvas(320, 800);
  background(245, 135, 66);
  for (var i = 0; i < dates.length; i++){
      dashes[i] = new Dash(dates[i])
    }
  }
