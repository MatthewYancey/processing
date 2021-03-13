function Name(person) {
    max_year = 1950;
    min_year = 1630; //true min is 1615
    r_size = map(random(100), 0, 100, 1, 20);

    lightness = 180;
    r_rgb1 = random(lightness);
    r_alpha = map(random(100), 0, 100, 100, 225);
    y = map(person[0], min_year, max_year, 0, height, 0, height);
    x = random(width) - 30;

    if (person[2] != ''){
        textSize(r_size);
        strokeWeight(0);
        fill(r_rgb1, r_rgb1, r_rgb1, r_alpha);
        text(person[2], x, y);
    }
}