function Sun() {

    this.sun_height = height - (height * 0.9);

    this.setup = function () {
        fill(s_color);
        noStroke();
        circle(width * 2 / 3, this.sun_height, 132);
    }

    this.update = function () {
        fill(s_color);
        noStroke();
        circle(width * 2 / 3, this.sun_height, 132);
    }

    this.setup();
}
