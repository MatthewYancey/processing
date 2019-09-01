function Cloud() {

    this.alpha = 240;

    this.setup = function() {
        // this.speed = random(1, 5);
        this.speed = random(1, 5) / 20;
        this.x = random(width + 20, width + 150);
        this.y = random(0, height * 1/2);
    }

    this.show = function() {
        // makes the clouds
        strokeWeight(0);
        fill(255, 255, 255, this.alpha);
        arc(this.x, this.y + 4, 40, 40, HALF_PI + QUARTER_PI, QUARTER_PI, CHORD);
        arc(this.x + 20, this.y, 50, 50, HALF_PI + QUARTER_PI, QUARTER_PI, CHORD);
        arc(this.x + 50, this.y + 6, 30, 30, HALF_PI + QUARTER_PI, QUARTER_PI, CHORD);   
        strokeWeight(10);
        stroke(255, 255, 255, this.alpha);
        line(this.x - 16, this.y + 18, this.x + 90, this.y + 18);
    }

    this.update = function(){
        this.x = this.x - this.speed;
        if (this.x < -100){
            this.setup();
        }
    }
    
    this.setup();
}