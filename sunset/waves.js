function Waves(start_y = height - (height / 3)) {

    this.setup = function (start_y) {
        this.y = start_y;
        this.speed = 1 / 10;
        this.alpha = 0;
        this.wave_hight = 1;
        this.wave_cutoff = 30;

        fill(50, 75, 75);
        strokeWeight(10);
        rect(0, this.y, width, this.wave_hight);
    }

    this.update = function () {
        this.y = this.y + this.speed;
        this.alpha = map(this.y, height - (height / 3), height, 0, 255);
        this.wave_hight = map(this.y, height - (height / 3), height, 0, 10);

        fill(220, 220, 220, this.alpha);
        strokeWeight(0);
        rect(0, this.y, width, this.wave_hight);

        if (this.y > height) {
            this.setup(height - (height / 3));
        }
    }

    this.setup(start_y);
}