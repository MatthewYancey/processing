function Dash(person) {

    max_year = 2000;
    min_year = 1615; //true min is 1615
    
    place_list = ['england', 'states', 'germany', '']
    
    y = map(person[0], min_year, max_year, 0, height);
    border = 10;

    r1 = '';
    alpha = 150;

    // changes color basd on country
    if (person[3] == 'germany') {
        r1 = 201;
        r2 = 183;
        r3 = 44;

        section = 0
        x1 = (width / 3) * section + border;
        x2 = (width / 3) * section + (width / 3) - (border / 2);
    } else if (person[3] == 'states') {
        r1 = 42;
        r2 = 109;
        r3 = 201;

        section = 1
        x1 = (width / 3) * section + (border / 2);
        x2 = (width / 3) * section + (width / 3) - (border / 2);
    } else if (person[3] == 'england') {
        r1 = 235;
        r2 = 131;
        r3 = 52;

        section = 2
        x1 = (width / 3) * section + (border / 2);
        x2 = (width / 3) * section + (width / 3) - border;
    }

    if (r1 != '') {
        alpha = map(random(100), 0, 100, 100, 225);
        stroke(r1, r2, r3, alpha);
        line(x1, y, x2, y);
    }
}