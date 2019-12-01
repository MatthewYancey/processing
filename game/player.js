class Player {
    constructor(input_lane) {
        this.lane = input_lane;
        this.y = height - 80;
    }

    lane_change(input_lane){
        this.lane = input_lane;
    }

    show() {
        fill(189, 19, 135);
        rect(this.lane, this.y, player_size, player_size);        
    }
}