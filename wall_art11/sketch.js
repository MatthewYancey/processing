function setup() {
  size = [1.5, 2.5];
  size_x = 220;
  createCanvas(size[0] * size_x, size[1] * size_x);
  background(200, 200, 200);
  for (var i = 0; i < people.length; i++){
      new Dash(people[i]);
    }

    for (var i = 0; i < people.length; i++){
    }

}
