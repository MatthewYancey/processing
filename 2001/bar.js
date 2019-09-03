function Bar() {

    this.n_bars = 3;
    this.padding = 2;
    this.bar_speed = 0.2;
    this.bar_max_length = 10;
    this.r = 0;
    this.pi_theta = 0;
    this.pi_theta_list = [];

    this.setup = function () {
        this.r = 1;
        for (i = 0; i < this.n_bars; i++) {
            var map_value = map(i, 0, this.n_bars, 0, 0.5);
            this.pi_theta_list[i] = (PI * map_value);
            print(map_value);
            // this.pi_theta_list[i + 1] = (PI * - (i + 1) / (this.n_bars + this.padding));
        }
        // print(this.pi_theta_list);
    }

    this.update = function () {
        translate(width / 2, height / 2);

        for (i = 0; i < this.pi_theta_list.length; i++) {
            var x1 = this.r * cos(PI * this.pi_theta_list[i]);
            var y1 = this.r * sin(PI * this.pi_theta_list[i]);
            var x2 = (this.r - this.bar_speed) * cos(PI * this.pi_theta_list[i]);
            var y2 = (this.r - this.bar_speed) * sin(PI * this.pi_theta_list[i]);

            strokeWeight(3);
            stroke(255, 255, 255);
            line(x1, y1, x2, y2);
        }

        // updates values
        this.r = this.r + this.bar_speed;

        if (y1 > height / 2 | y1 < -height / 2 | x1 > width / 2 | x1 < -width / 2) {
            this.r = 1;
        }

    }

    this.setup();
}