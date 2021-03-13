function Dash(person) {

    max_year = 2019;
    min_year = 1615; //true min is 1615
    y = map(person[0], min_year, max_year, 0, height);


    place_list = ['england', 'states', 'germany', '']

    dark_level = 150;
    // changes color basd on country
    if (person[3] == ''){ // gray
        r1 = 48;
        r2 = 48;
        r3 = 48;
        alpha = 20;
    } else if (person[3] == 'states') { // red
        r1 = 161;
        r2 = 55;
        r3 = 34;
        r1 = 48;
        r2 = 48;
        r3 = 48;
        alpha = 20;
    } else if (person[3] == 'germany') { // yellow
        r1 = 201;
        r2 = 183;
        r3 = 44;
        alpha = 225;
    } else if (person[3] == 'england') { // blue
        r1 = 42;
        r2 = 109;
        r3 = 201;
        alpha = 100;

    }


//    alpha = map(random(100), 0, 100, 100, 150);

    // alpha = map(random(100), 0, 100, 100, 225);
    // // alpha = 225;
    // stroke(r1, r2, r3, alpha);
    // line(0 + boarder_jitter, y, width - boarder_jitter, y + y_jitter);    
    stroke(r1, r2, r3, alpha);
    strokeWeight(map(random(100), 0, 100, 1, 4));
    boarder_jitter = map(random(100), 0, 100, 10, 20);
    y_jitter = map(random(100), 0, 100, -5, 5);
    line(0 + boarder_jitter, y, width - boarder_jitter, y + y_jitter);
}