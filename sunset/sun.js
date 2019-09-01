function Sun() {


    this.make_sun = function () {
        fill(217, 88, 113);
        noStroke();
        circle(229, 200, 132);
    }

    this.reflection = function () {

        fill(217, 30, 113, 50);
        noStroke();
        beginShape();
        vertex(175, height - height / 3);
        vertex(282, height - height / 3);
        vertex(282, height);
        vertex(175, height);
        // vertex(307, height);
        // vertex(150, height);
        endShape(CLOSE);
    }

}
