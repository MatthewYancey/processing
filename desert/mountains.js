function Mountains(start_x) {

    this.x = 100;
    this.start_height = height / 3 * 2.5;
    this.m_base = height / 2.2;
    this.hight_noise = 40;
    this.width_noise = 20;

    this.setup = function (start_x = 0) {
        // adds height noise
        this.m_hight = this.start_height + random(-this.hight_noise, this.hight_noise);
        this.m_width = this.start_height + random(-this.width_noise, this.width_noise);

        this.x = start_x - m_width;
        fill(m_color);
        noStroke();
        triangle(this.x, height - this.m_hight,
            this.x - m_width / 2, this.m_base,
            this.x + m_width / 2, this.m_base);
    }

    this.update = function () {
        fill(m_color);
        noStroke();
        triangle(this.x, height - this.m_hight,
            this.x - m_width / 2, this.m_base,
            this.x + m_width / 2, this.m_base);

        this.x = this.x + m_speed;

        if (this.x > width + mountain_padding) {
            this.setup(-mountain_padding);
        }
    }

    this.setup(start_x)

}