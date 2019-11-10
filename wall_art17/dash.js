function Dash(person) {
    // y and boarder
    this.y1_jitter = random(3);

    this.setup = function(){

        // x and y
        this.x = map(random(100), 0, 100, boarder, width - boarder);
        this.y1 = map(person[0], min_year, max_year, boarder - this.y1_jitter, height - boarder, true);
        if (person[1] == -1){
            this.y2 = map(person[0] + default_age, min_year, max_year, boarder, height - boarder, true);
        } else {
            this.y2 = map(person[1], min_year, max_year, boarder, height - boarder, true);
        }

        // color
        this.r1 = random(122);
        this.blue = random(50);
        this.alpha = map(random(100), 0, 100, 100, 225);

        // stroke
        noStroke();
        stroke(this.r1, this.r1, this.r1 + this.blue, this.alpha);
        line(this.x, this.y1, this.x, this.y2); 
    }

    this.show = function() {
        noStroke();
        stroke(this.r1, this.r1, this.r1 + this.blue, this.alpha);
        line(this.x, this.y1, this.x, this.y2);     
    }

    this.setup();
}