function Bar(start_r = 0) {

    this.n_bars = 12;
    this.padding = 0.2;

    this.bar_speed = 1;
    this.bar_speed_max = 10;

    this.bar_length = 0;
    this.bar_length_max = 60;

    this.pi_theta = 0;
    this.pi_theta_list = [];

    this.alaph;
    this.alpha_max = 100;
    this.alpha_min = 50;
    this.r = start_r;


    this.setup = function () {
        this.rg = random(100, 255);
        this.g = random(100, 255);
        this.b = random(100, 255);
        for (i = 0; i < this.n_bars; i++) {
            var map_value = map(i, 0, this.n_bars - 1, -0.5 + this.padding, 0.5 - this.padding);
            this.pi_theta_list[i] = map_value;
        }
    }

    this.update = function () {

        // calculates the length of bar
        this.bar_length = map(this.r, 0, width / 2, 0, this.bar_length_max);

        // plots the lines
        for (i = 0; i < this.pi_theta_list.length; i++) {
            var x1 = this.r * cos(PI * this.pi_theta_list[i]);
            var y1 = this.r * sin(PI * this.pi_theta_list[i]);
            var x2 = (this.r - this.bar_length) * cos(PI * this.pi_theta_list[i]);
            var y2 = (this.r - this.bar_length) * sin(PI * this.pi_theta_list[i]);

            strokeWeight(3);
            // stroke(200, 200, 200, this.alpha);
            stroke(this.rg, this.g, this.b, this.alpha);
            line(x1, y1, x2, y2);
            line(-x1, y1, -x2, y2);
        }

        // updates speed
        this.bar_speed = map(this.r, 0, width / 2, 0, this.bar_speed_max);
        if (this.bar_speed < 1) { this.bar_speed = 1 }
        this.r = this.r + this.bar_speed;

        // updates alpha
        this.alpha = map(this.r, 0, width / 1.5, this.alpha_max, this.alpha_min);

        // resets when off the canvas
        if (this.r > width / 2 | this.r < -width / 2) {
            this.r = 1;
            this.rg = random(100, 255);
            this.g = random(100, 255);
            this.b = random(100, 255);
        }

    }

    this.setup();
}
