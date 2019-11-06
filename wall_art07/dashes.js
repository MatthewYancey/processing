function Dash(person) {

    max_year = 2019;
    min_year = 1615; //true min is 1615
    y = map(person[0], min_year, max_year, 0, height);

    // changes color basd on country    
    dark_level = 150;
    r1 = random(dark_level);
    blue = random(40);
    alpha = map(random(100), 0, 100, 100, 150);

    stroke(r1, r1, r1 + blue, alpha);
    line(0, y, width, y);

}