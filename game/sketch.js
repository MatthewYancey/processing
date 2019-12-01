var size = [400, 800];

// makes the columns 
var lane_size = size[0] / 3;
var square_size = 50;
var lane_1 = (size[0] / 3) - (lane_size / 2) - (square_size / 2);
var lane_2 = (2 * size[0] / 3) - (lane_size / 2) - (square_size / 2);
var lane_3 = (3 * size[0] / 3) - (lane_size / 2) - (square_size / 2);

// player variables
let player;
var y_pos = size[1] - 70;
var player_size = 50;
var x_pos

// coin variables
var coins = [];
var new_coins = 0.015;
var n_coins = 4;
var coin_size = 30;
var coin_points = 5;

// Score
var score = 0;

function setup() {  
  createCanvas(size[0], size[1]);
  background(200, 200, 200);
  my_lane = lane_2;
  player = new Player(my_lane);
  coins.push(new Coin());
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW & my_lane == lane_1) {
    my_lane = lane_2;
    player.lane_change(my_lane);
  } else if (keyCode === RIGHT_ARROW & my_lane == lane_2) {
    my_lane = lane_3;
    player.lane_change(my_lane);
  } else if (keyCode === LEFT_ARROW & my_lane == lane_3) {
    my_lane = lane_2;
    player.lane_change(my_lane);
  } else if (keyCode === LEFT_ARROW & my_lane == lane_2) {
    my_lane = lane_1;
    player.lane_change(my_lane);
  }
}

function draw() {
  background(200, 200 ,200);
  player.show();
  text('SCORE', 20, 20);
  text(score, 20, 40);

  // Adds new coins if we need them
  if (random(0, 1) < new_coins & coins.length < n_coins){
    coins.push(new Coin());
  }

  // checks for collision
  collision_check();
}