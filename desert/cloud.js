class Cloud {

    cloud_width = 100;
    cloud_color = [255, 255, 255, 100];
    cloud_weight = 20;
    x_offset = 30;
    y_offset = 12;

    constructor(start_x = 0 - this.cloud_width - this.x_offset - this.cloud_width   ) {
        this.x = start_x;
        this.y = random (20, 100);
        stroke(this.cloud_color[0], this.cloud_color[1], this.cloud_color[2], this.cloud_color[3]);
        strokeWeight(this.cloud_weight);
        line(this.x, this.y, this.x + this.cloud_width, this.y);
        line(this.x + this.x_offset, this.y + this.y_offset, 
            this.x + this.x_offset + this.cloud_width, this.y + this.y_offset);
    }

    reset() {
        stroke(this.cloud_color[0], this.cloud_color[1], this.cloud_color[2]);
        strokeWeight(this.cloud_weight);
        this.x = -100; 
    }

    update() {
        this.x = this.x + cloud_speed;
        stroke(this.cloud_color[0], this.cloud_color[1], this.cloud_color[2], this.cloud_color[3]);
        strokeWeight(this.cloud_weight);
        line(this.x, this.y, this.x + this.cloud_width, this.y);
        line(this.x + this.x_offset, this.y + this.y_offset,
            this.x + this.x_offset + this.cloud_width, this.y + this.y_offset);

        if (this.x > width){
            this.reset();
        }
    }
}
