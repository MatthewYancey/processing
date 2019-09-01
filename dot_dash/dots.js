function Dot() {
    this.ping_lenght = 10
    this.x = random(width);
    this.y = random(height);

    this.show = function () {
        fill(200, 200, 200);
        noStroke();
        circle(this.x, this.y, 10);
    }

    this.ping = function() {
        for (var i = 0; i < this.ping_lenght; i++) {
            fill(random(255), random(255), random(255), map(i, 0, this.ping_lenght, 255, 0));
            noStroke();
            circle(this.x, this.y, 10 + (i * 2))
        }
    }

}