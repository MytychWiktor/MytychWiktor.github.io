function Ship() {
    this.pos = createVector(width/2 , height/2);
    this.r = 0;
    this.heading = 0;
    this.rotation = 0;
    this.vel = createVector(0,0);
    this.isThrusting = false;


    this.thrusting = function(b) {
        this.isThrusting = b;
    }

    this.update = function() {
        if (this.isThrusting) {
            this.thrust();
        }
        this.pos.add(this.vel);
        this.vel.mult(0.95);
    }

    this.thrust = function() {
        var force = p5.Vector.fromAngle(this.heading);
        force.mult(0.1);
        this.vel.add(force);
    }

    this.hits = function(xwing) {
        var d = dist(this.pos.x, this.pos.y, xwing.pos.x, xwing.pos.y);
        if (d < this.r + xwing.r + 5) {
            return true;
        } else {
            return false;
        }
    }

    this.render = function() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.heading + PI / 2);
        fill(0);
        stroke(255,255,255);
        ellipse(this.r, this.r, 30);
        triangle(this.r-10, this.r-50, this.r-30, this.r+5, this.r-10, this.r+5)
        triangle(this.r+10, this.r-50, this.r+30, this.r+5, this.r+10, this.r+5)
        pop();
    }

    this.edges = function() {
        if (this.pos.x > width + this.r) {
            this.pos.x = -this.r
        } else if ( this.pos.x < -this.r) {
            this.pos.x = width + this.r;
        }
        if (this.pos.y > height + this.r) {
            this.pos.y = -this.r
        } else if ( this.pos.y < -this.r) {
            this.pos.y = height + this.r;
        }
    }

    this.setRotation = function(a) {
        this.rotation = a;
    }

    this.turn = function() {
        this.heading += this.rotation;
    }
}
