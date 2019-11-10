function Dash(person) {
    var default_age = 30;
    var max_year = 2011;
    var min_year = 1680; //true min is 1615

    // boarder
    var boarder = 5
    var y1_jitter = random(3);

    // x and y
    var x = map(random(100), 0, 100, boarder, width - boarder);
    var y1 = map(person[0], min_year, max_year, boarder - y1_jitter, height - boarder, true);
    if (person[1] == -1){
        var y2 = map(person[0] + default_age, min_year, max_year, boarder, height - boarder, true);
    } else {
        var y2 = map(person[1], min_year, max_year, boarder, height - boarder, true);
    }

    // color
    var r1 = random(122);
    var r2 = random(122);
    var r3 = random(122);
    var blue = random(50);
    var alpha = map(random(100), 0, 100, 100, 225);

    // stroke
    noStroke();
    stroke(r1, r1, r1 + blue, alpha);
    line(x, y1, x, y2); 
}