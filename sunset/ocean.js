function Ocean() {

    this.n_waves = 4;

    this.show = function(){
        fill(81, 109, 166);
        strokeWeight(0);
        rect(0, height - height / 3, width, height);
    }

}