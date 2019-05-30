
function Laser(spos, angle) {
    this.pos = createVector(spos.x, spos.y);
    this.vel = p5.Vector.fromAngle(angle);
    this.vel.mult(6);

    this.update = function() {
        this.pos.add(this.vel);
    }

    this.render = function() {
        push();
        stroke(0,255,0);
        strokeWeight(5);
        noFill();
        point(this.pos.x, this.pos.y);
        pop();
    }


    this.hits = function(xwing) {
        var d = dist(this.pos.x, this.pos.y, xwing.pos.x, xwing.pos.y);
        if (d < xwing.r) {
           return true;
        } else {
            return false;
        }

    }

}