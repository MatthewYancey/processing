function Mountains(start_x) {

    this.m_width = 500;
    this.x = 100;
    this.speed = 0.1;
    this.m_hight = height / 3;
    this.hight_noise = 40;
    this.width_noise = 20;

    this.setup = function (start_x = 0) {
        // adds height noise
        this.m_hight = this.m_hight + random(-this.hight_noise, this.hight_noise);
        this.m_width = this.m_width + random(-this.width_noise, this.width_noise);

        this.x = start_x;
        fill(m_color);
        noStroke();
        triangle(this.x - (this.m_width / 2), height - this.m_hight,
            this.x, height,
            this.x - this.m_width, height);
    }

    this.update = function () {
        fill(m_color);
        noStroke();
        triangle(this.x - (this.m_width / 2), height - this.m_hight,
            this.x, height,
            this.x - this.m_width, height);
        
        this.x = this.x + this.speed;

        if (this.x - this.width > width){
            this.setup(0);
        }
    }

    this.setup(start_x)

}