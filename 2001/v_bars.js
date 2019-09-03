function V_bars() {

    this.line_padding = 15;

    this.setup = function () {
        // what section of the screen are we in
        this.region = Math.floor(random(1, 6));
        this.region = map(this.region, 1, 5, 0, 180);

        // how many lines are we going to create
        var lines_batch = [];
        for (var i = 0; Math.floor(random(1, 5)); i++) {
            // lines_batch[i] = v_bar(this_region + (i * this.line_padding));
            lines_batch[i] = v_bar();
        }
    }

    this.show = function () {
        for (var i = 0; lines_batch.length; i++) {
            lines_batch[i].show();
        }
    }

    this.setup()
}