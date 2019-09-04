function Bar(start_x = 0) {

    this.r;
    this.start_height;
    this.angle;
    this.x1 = 10;
    this.x2 = 0;
    this.y2 = 0;
    this.speed = 3;
    this.distortion = 0;
    this.max_distortion = 10;
    this.bar_length = 0;
    this.max_bar_length = 40;
    this.rgb = [];

    this.setup = function (start_x = 0) {
        this.start_height = Math.floor(random(0, 10));
        this.start_height = map(this.start_height, 0, 9, - height / 2, height / 2);
        this.x1 = start_x;
        this.rgb[0] = random(0, 255);
        this.rgb[1] = random(0, 255);
        this.rgb[2] = random(0, 255);
    }

    this.update = function () {

        // bar length
        this.bar_length = map(this.x1, 0, width / 2, 0.2, this.max_bar_length);

        // distortion
        this.distortion = map(abs(this.start_height), 0, height / 2, 0, this.max_distortion);
        if (this.start_height > 0) {
            this.y2 = this.start_height - this.distortion;
        } if (this.start_height < 0) {
            this.y2 = this.start_height + this.distortion;
        }

        this.x2 = this.x1 - this.bar_length;
        this.x1 = this.x1 + this.speed;

        stroke(this.rgb[0], this.rgb[1], this.rgb[2]);
        strokeWeight(3);
        line(this.x1, this.start_height, this.x2, this.y2);
        line(-this.x1, this.start_height, -this.x2, this.y2);

        if (abs(this.x2) > width / 2) {
            this.setup();
        }
    }

    this.setup(start_x);

}