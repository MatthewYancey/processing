function Dash(person) {

    var max_year = 2019;
    var min_year = 1600; //true min is 1615
    var padding_range = [15, 30];
    var x_jitter_range = 2;
    var length_jitter_range = 10;
    var x_anchor = 20;

    var y = map(person[0], min_year, max_year, 0, height);
    var noise_freq = 10;
    var y_jitter_range = 2;
    var curve_range = 60;

    var brush_width = 10;
    var n_sub_brush = 2;
    var sub_brush_ratio = 0.4;
    var sub_line_push = brush_width / 3;
    
    var alpha = 180;
    var color_jitter_range = 40;
    var r1 = '';

    // changes color basd on country
    if (person[3] == ''){ // gray
        r1 = 48;
        r2 = 48;
        r3 = 48;
    } else if (person[3] == 'states') { // red
        r1 = 161;
        r2 = 55;
        r3 = 34;
    } else if (person[3] == 'germany') { // yellow
        r1 = 201;
        r2 = 183;
        r3 = 44;
    } else if (person[3] == 'england') { // blue
        r1 = 42;
        r2 = 109;
        r3 = 201;
    }

    function Stroke(r1, r2, r3, alpha){
        // width
        var y_jitter = map(random(100), 0, 100, -y_jitter_range, y_jitter_range);
        var curve_bend = map(random(100), 0, 100, -curve_range, curve_range);
        var padding = map(noise(map(y, 0, width, 0, noise_freq)), 0, 1, padding_range[0], padding_range[1]);
        var x_jitter = map(random(100), 0, 100, -x_jitter_range, x_jitter_range)
        var length_jitter = map(random(100), 0, 100, -length_jitter_range, length_jitter_range)

        // creates the main line
        noFill();
        stroke(r1, r2, r3, alpha);
        strokeWeight(brush_width);
        curve(-x_anchor, y - curve_bend,
            padding + x_jitter, y - y_jitter,
            width - padding + x_jitter, y + y_jitter,
            width + x_anchor, y + curve_bend);

        // creates the sub lines for texture
        for (var i = 0; i < n_sub_brush; i++){
            color_jitter = map(random(100), 0, 100, -color_jitter_range, color_jitter_range);
            y_sub_jitter = map(random(100), 0, 100, -2, 2);
            
            stroke(r1 + color_jitter, r2 + color_jitter, r3 + color_jitter, alpha);
            strokeWeight(brush_width * sub_brush_ratio);
            curve(0 - x_anchor, y - curve_bend,
                padding + x_jitter, y - y_jitter + y_sub_jitter,
                width - padding + sub_line_push + x_jitter, y + y_jitter + y_sub_jitter,
                width + x_anchor, y + curve_bend);
        }    
    }

    if (r1 != ''){
        new Stroke(r1, r2, r3, alpha);
    }
}