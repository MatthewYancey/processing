function Dot() {
    this.x = random(width);
    this.y = random(height);

    this.show = function () {
        fill(200, 200, 200);
        noStroke();
        circle(this.x, this.y, 10);
    }

}