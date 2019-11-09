function Dash(person) {

    max_year = 2000;
    min_year = 1615; //true min is 1615
    
    place_list = ['england', 'states', 'germany']
    
    y = map(person[0], min_year, max_year, 0, height);
    border = 10;

    r1 = '';
    alpha = 150;

    // changes color basd on country
    if (person[1] == 'germany') {
        r1 = 201; // yellow
        r2 = 183;
        r3 = 44;
    } else if (person[1] == 'states') {
        r1 = 42; // blue
        r2 = 109;
        r3 = 201;
    } else if (person[1] == 'england') {
        r1 = 235; // red
        r2 = 131;
        r3 = 52;
    }

    alpha = map(random(100), 0, 100, 100, 225);
    // alpha = 225;
    stroke(r1, r2, r3, alpha);
    strokeWeight(map(random(100), 0, 100, 1, 4));
    boarder_jitter = map(random(100), 0, 100, 4, 10);
    y_jitter = map(random(100), 0, 100, -5, 5);
    line(0 + boarder_jitter, y, width - boarder_jitter, y + y_jitter);




}