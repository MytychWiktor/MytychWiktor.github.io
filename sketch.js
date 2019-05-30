var ship;
var xwing = [];
var lasers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  for (var i = 0; i < 20; i++){
      xwing.push(new Xwing());
  }

}


function draw() {
    background(0,0,0);
    ship.render();
    ship.turn();
    ship.update();
    ship.edges();

    for (var i = 0; i < xwing.length; i++) {
        if (ship.hits(xwing[i])) {
            alert("Game Over, Press OK until page refreshes.");
            document.location.reload();
        }
        xwing[i].render();
        xwing[i].update();
        xwing[i].edges();
    }

    for (var i = 0; i < lasers.length; i++) {
        lasers[i].render();
        lasers[i].update();
        for (var j = 0; j < xwing.length; j++) {
            if ( lasers[i].hits(xwing[j])) {
            xwing.splice(j, 1);
            }
        }
    }


    ship.render();
    ship.turn();
    ship.update();
    ship.edges();

}

function keyReleased() {
    ship.setRotation(0);
    ship.thrusting(false);
}

function keyPressed(){

    if (key == ' ') {
        lasers.push(new Laser(ship.pos, ship.heading));
    } else if(keyCode == RIGHT_ARROW) {
        ship.setRotation(0.03)
    } else if (keyCode == LEFT_ARROW) {
        ship.setRotation(-0.03)
    } else if ( keyCode == UP_ARROW) {
        ship.thrusting(true);
    }

}

