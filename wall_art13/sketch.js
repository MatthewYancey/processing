function setup() {
  size = [1.5, 2.5];
  size_x = 220;
  createCanvas(size[0] * size_x, size[1] * size_x);
  background(237, 227, 223);

  // new Dash(people[20]);
  // new Dash(people[600]);

  for (var i = 0; i < people.length; i++){
      new Dash(people[i]);
    }

}
