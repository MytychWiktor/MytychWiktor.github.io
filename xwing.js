
function Xwing() {
    this.pos = createVector(random(width), random(height));
    this.r = 30;
    this.vel = p5.Vector.random2D();


    this.update = function() {
        this.pos.add(this.vel);
    }

    this.render = function() {
        push();
        noFill();
        stroke(255,0,0);
        translate(this.pos.x, this.pos.y);
        ellipse(0, 0, this.r);
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

}