function Dash(dots) {
    this.x;
    this.y;
    this.step;
    this.step_range = 50;
    this.dot_size = 5;
    this.end_dot;

    this.setup = function (start_dot = floor(random(dots.length))) {
        this.end_dot = floor(random(dots.length));
        this.step = 0;
        this.start_x = dots[start_dot].x;
        this.start_y = dots[start_dot].y;
        this.end_x = dots[this.end_dot].x;
        this.end_y = dots[this.end_dot].y;
        fill(255, 255, 255);
        noStroke();
        circle(this.start_x, this.start_y, this.dot_size);
    }

    this.show = function () {

        this.x = map(this.step, 0, this.step_range, this.start_x, this.end_x);
        this.y = map(this.step, 0, this.step_range, this.start_y, this.end_y);

        fill(255, 255, 255);
        noStroke();
        circle(this.x, this.y, this.dot_size);

        if (this.step >= this.step_range) {
            this.setup(this.end_dot);
        } else {
            this.step = this.step + 1;
        }
    }

    this.setup();
}