class Ball{
    constructor(x, y, r) {
        var options = {
            'isStatis': false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.image = loadImage("Ball.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
}