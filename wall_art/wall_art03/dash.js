function Dash(person) {
    max_year = 2000;
    min_year = 1630; //true min is 1615
    r_size = map(random(100), 0, 100, 1, 30);

    dark_level = 150;
    r_rgb1 = random(dark_level);
    r_rgb2 = random(dark_level);
    r_rgb3 = random(dark_level);
    y = map(person[0], min_year, max_year, 0, height);
    x = random(width) - 30;

    if (person[2] != ''){
        textSize(r_size);
        fill(r_rgb1, r_rgb1, r_rgb1, 100);
        text(person[2], x, y);
    }
}