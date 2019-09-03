function V_bar(angle = 120) {

    this.angle = angle
    this.speed = 2;
    this.max_length = 50;

    this.get_x = function (r) {
        return r * sin(this.angle);
    }

    this.get_y = function (r) {
        return r * cos(this.angle);
    }

    this.setup = function () {

        this.r1 = 1;

        // update the cartesian cords
        this.x1 = this.get_x(this.r1);
        this.y1 = this.get_y(this.r1);
        this.x2 = 0;
        this.y2 = 0;
        print(this.angle);
        print("x1");
        print(this.x1)

    }


    this.show = function () {

        // updates the 1s
        // update radians
        this.r1 = this.r1 + this.speed;
        // update the cartesian cords
        this.x1 = this.get_x(this.r1);
        this.y1 = this.get_y(this.r1);

        // updates the 2s
        this.r2 = this.r1 + map(this.y1, -height / 2, height / 2, 0, -this.max_length);
        this.x2 = this.get_x(this.r2);
        this.y2 = this.get_y(this.r2);

        // maps the cartesian cords to the center of the screen
        this.x1_map = map(this.x1, 0, width, width / 2, width);
        this.x2_map = map(this.x2, 0, width, width / 2, width);
        this.y1 = map(this.y1, -height / 2, height / 2, 0, height);
        this.y2 = map(this.y2, -height / 2, height / 2, 0, height);

        // update the rectangle
        strokeWeight(1);
        stroke(255, 255, 255);
        line(this.x1_map, this.y1, this.x2_map, this.y2);

        if (this.y2 > height | this.y2 < 0) {
            this.setup();
        }

    }

    this.setup();
}