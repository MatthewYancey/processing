function collision_check() {
 
    // checks if coins were grabed
    for (i = 0; i < coins.length; i++) {
        if (collideRectCircle(player.lane, player.y, player_size, player_size, coins[i].x, coins[i].y, coin_size)) {
            coins[i] = new Coin();
            score = score + coin_points;
        }

    }

    // removes coins that are past the bottom
    for (i = 0; i < coins.length; i++) {
        if (coins[i].y < height){
          coins[i].show();
        } else {
          coins[i] = new Coin();
        }
    }
}