function Dash(person) {
    default_age = 30;
    max_year = 2005;
    min_year = 1690; //true min is 1615

    this.x = random(width);
    // 1615 is true min
    this.y1 = map(person[0], min_year, max_year, 0, height);
    if (person[1] == -1){
        this.y2 = map(person[0] + default_age, min_year, max_year, 0, height);
    } else {
        this.y2 = map(person[1], min_year, max_year, 0, height);
    }

    // randomize the color
    r1 = random(2);
    this.alpha = map(random(100), 0, 100, 220, 225);

    stroke(r1, r1, r1, this.alpha);
    line(this.x, this.y1, this.x, this.y2);
 
}