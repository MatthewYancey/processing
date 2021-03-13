function Dash(person) {
    default_age = 30;
    max_year = 2050;
    min_year = 1630; //true min is 1615

    this.x = random(width);
    // 1615 is true min
    this.y1 = map(person[0], min_year, max_year, 0, height);
    if (person[1] == -1){
        this.y2 = map(person[0] + default_age, min_year, max_year, 0, height);
    } else {
        this.y2 = map(person[1], min_year, max_year, 0, height);
    }

    // randomize the color
    var dark_level = 150;
    this.r1 = random(dark_level);
    this.r2 = random(dark_level);
    this.r3 = random(dark_level);

    this.blue = random(40);
    this.alpha = map(random(100), 0, 100, 100, 200);

    this.line_weight = map(random(100), 0, 100, 1, 5);
    var max_bend = 40;
    var bend1 = map(random(100), 0, 100, -max_bend, max_bend);
    var bend2 = map(random(100), 0, 100, -max_bend, max_bend);
    var bend3 = map(random(100), 0, 100, -max_bend, max_bend);
    var bend4 = map(random(100), 0, 100, -max_bend, max_bend);

    noFill();
    stroke(this.r1, this.r1, this.r1 + this.blue, this.alpha);
    strokeWeight(this.line_weight);
    // line(this.x, this.y1, this.x, this.y2);
    curve(this.x + bend1, this.y1 + bend2, 
        this.x, this.y1, this.x, this.y2,
        this.x + bend3, this.y2 + bend4);
}