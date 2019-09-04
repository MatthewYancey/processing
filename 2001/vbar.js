function Vbar() {    

    var n_bars = 12;
    var padding = 15;
    this.speed = random(1, 2);


    // scale the colors to morph

    // draws the lines
    this.show = function () {
        // first sees if it is still on the canvas
        if (this.x > width | this.x < 0){
            this.set_start();
        } else {
            this.update();
        }

        strokeWeight(3);
        stroke(this.r, this.g, this.b, this.alpha);
        line(this.x, this.y, this.x, this.y + this.length);
    }

    // updates all the values
    this.update = function() {
        //updates the y and length
        var abs_x = abs(this.x - (width / 2));
        this.length = this.length + (abs_x / 4);
        this.y = this.y - (abs_x / 8);
        // updates the transparency
        this.alpha = map(abs_x, 0, (width / 2), 255, 0);

        // updates the x pos
        if (this.side == 0){
            this.x = this.x + this.speed;
        } else {
            this.x = this.x - this.speed;
        }

    }

    // resets the line to the middle when it hits the endge of the screen
    this.set_start = function() {
        this.x = width / 2
        this.y = height / 2;
        this.length = 1;
        this.side = Math.random() >= 0.5;
        this.alpha = 255;
        this.r = random(100, 255);
        this.g = random(100, 255);
        this.b = random(100, 255);
    }

    this.set_start();

}