function Dash(person) {

    max_year = 2019;
    min_year = 1600; //true min is 1615

    y = map(person[0], min_year, max_year, 0, height);
    boarder_range = [15, 22];
    n_sub_brush = 2;

    brush_width = 10;
    color_jitter_range = 40;
    sub_brush_ratio = 0.4;

    y_jitter_range = 2;
    alpha = 180;

    r1 = '';
    // changes color basd on country
    if (person[1] == ''){ // gray
        r1 = 48;
        r2 = 48;
        r3 = 48;
    } else if (person[1] == 'states') { // red
        r1 = 161;
        r2 = 55;
        r3 = 34;
    } else if (person[1] == 'germany') { // yellow
        r1 = 201;
        r2 = 183;
        r3 = 44;
    } else if (person[1] == 'england') { // blue
        r1 = 42;
        r2 = 109;
        r3 = 201;
    }

    function Stroke(r1, r2, r3, alpha){
        // width
        y_jitter = map(random(100), 0, 100, -y_jitter_range, y_jitter_range);
        curve_bend = map(random(100), 0, 100, -5, 5);
        boarder_jitter = map(random(100), 0, 100, boarder_range[0], boarder_range[1]);
        x_anchor = 20;
        
        noFill();
        // creates the main line
        stroke(r1, r2, r3, alpha);
        strokeWeight(brush_width);
        curve(0 - x_anchor, y - boarder_jitter,
            0 + boarder_jitter, y - y_jitter,
            width - boarder_jitter, y + y_jitter,
            width + x_anchor, y + boarder_jitter);

        // creates the sub lines for texture
        for (var i = 0; i < n_sub_brush; i++){
            color_jitter = map(random(100), 0, 100, -color_jitter_range, color_jitter_range);
            y_sub_jitter = map(random(100), 0, 100, -2, 2);
            sub_line_push = brush_width / 3;

            stroke(r1 + color_jitter, r2 + color_jitter, r3 + color_jitter, alpha);
            strokeWeight(brush_width * sub_brush_ratio);
            curve(0 - x_anchor, y - boarder_jitter,
                0 + boarder_jitter, y - y_jitter + y_sub_jitter,
                width - boarder_jitter + sub_line_push, y + y_jitter + y_sub_jitter,
                width + x_anchor, y + boarder_jitter);
        }    

    }

    if (r1 != ''){
        new Stroke(r1, r2, r3, alpha);
    }
}