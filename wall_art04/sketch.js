function setup() {
  createCanvas(320, 800);
  background(220, 220, 220);
  for (var i = 0; i < dates.length; i++){
      new Name(dates[i]);
      new Dash(dates[i]);
    }
}
