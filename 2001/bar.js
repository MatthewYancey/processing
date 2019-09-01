function Bar() {
    this.x = width / 2;
    this.y = height / 2;
    this.length = 20;
    this.speed = 10

    this.show = function () {

        // var thick = map(this.z, 0, 20, 1, 3);
        strokeWeight(20);
        stroke(138, 43, 226);
        line(this.x, this.y, this.x, this.y + this.length);
        this.x = this.x + this.speed;


        // strokeWeight(20);
        // stroke(138, 43, 226);
        // line(20, 20, 100, 100);

        // if (this.x > width){
        //     this.x = width / 2
        // }
    }


    // this.fall = function () {
    //     this.y = this.y + this.yspeed;
    //     var grav = map(this.z, 0, 20, 0, 0.2);
    //     this.yspeed = this.yspeed + grav;
    
    //     if (this.y > height) {
    //       this.y = random(-200, -100);
    //       this.yspeed = map(this.z, 0, 20, 4, 10);
    //     }
    //   }
    
    //   this.show = function () {
    //     var thick = map(this.z, 0, 20, 1, 3);
    //     strokeWeight(thick);
    //     stroke(138, 43, 226);
    //     line(this.x, this.y, this.x, this.y + this.len);
    //   }
    

}