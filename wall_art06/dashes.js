function Dash(person) {
    default_age = 30;
    max_year = 2050;
    min_year = 1650; //true min is 1615

    dark_level = 150;
    r1 = random(dark_level);
    // r2 = random(dark_level);
    // r3 = random(dark_level);

    blue = random(40);
    alpha = map(random(100), 0, 100, 100, 150);

    line_weight = map(random(100), 0, 100, 1, 5);
    max_bend = 40;
    bend1 = map(random(100), 0, 100, -max_bend, max_bend);
    bend2 = map(random(100), 0, 100, -max_bend, max_bend);
    bend3 = map(random(100), 0, 100, -max_bend, max_bend);
    bend4 = map(random(100), 0, 100, -max_bend, max_bend);

    x = random(width);
    y1 = map(person[0], min_year, max_year, 0, height);

    if (person[1] == -1){
        y2 = map(person[0] + default_age, min_year, max_year, 0, height);
    } else {
        y2 = map(person[1], min_year, max_year, 0, height);
    }

    noFill();
    stroke(r1, r1, r1 + blue, alpha);
    strokeWeight(line_weight);
    // line(x, y1, x, y2);
    curve(x + bend1, y1 + bend2, 
        x, y1, x, y2,
        x + bend3, y2 + bend4);
}