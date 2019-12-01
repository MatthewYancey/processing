class Coin {

    constructor() {
        this.speed = random(3, 10);
        this.y = 0;
        // picks the column
        this.lane = int(random(0, 3));
        this.x = (this.lane * size[0] / 3) + (lane_size / 2);
    }

    show() {
        this.y = this.y + this.speed;
        fill(237, 234, 19);
        circle(this.x, this.y, coin_size);
        line(this.x,
             this.y - (coin_size / 3),
             this.x,
             this.y + (coin_size / 3));
    }

}