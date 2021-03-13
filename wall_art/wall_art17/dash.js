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
        this.r = random(100);
        this.g = random(100);
        this.b = random(100);
        this.a = random(100);

        // stroke
        noStroke();
        stroke(this.r, this.r, this.r, this.alpha);
        line(this.x, this.y1, this.x, this.y2);
    }

    this.show = function() {
        // updates the mapped range
        this.r_mapped = map(this.r, 0, 100, slider_rlower.value(), slider_rupper.value());
        this.g_mapped = map(this.g, 0, 100, slider_glower.value(), slider_gupper.value());
        this.b_mapped = map(this.b, 0, 100, slider_blower.value(), slider_bupper.value());
        this.a_mapped = map(this.a, 0, 100, slider_alower.value(), slider_aupper.value());
        
        stroke(this.r_mapped, this.g_mapped, this.b_mapped, this.a_mapped);
        line(this.x, this.y1, this.x, this.y2);     
    }

    this.setup();
}