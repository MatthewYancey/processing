function Dash(person) {
    default_age = 30;
    max_year = 2011;
    min_year = 1680; //true min is 1615

    this.x = random(width);
    // 1615 is true min
    this.y1 = map(person[0], min_year, max_year, 0, height);
    if (person[1] == -1){
        this.y2 = map(person[0] + default_age, min_year, max_year, 0, height);
    } else {
        this.y2 = map(person[1], min_year, max_year, 0, height);
    }

    // randomize the color
    this.r1 = random(122);
    this.r2 = random(122);
    this.r3 = random(122);
    this.blue = random(50);
    this.alpha = map(random(100), 0, 100, 100, 225);

    stroke(this.r1, this.r1, this.r1 + this.blue, this.alpha);
    line(this.x, this.y1, this.x, this.y2);
 
}