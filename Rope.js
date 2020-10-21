class rope{
    constructor(body1,body2,offsetX,offsetY){
        var options = {
            body1: body1,
            body2: body2,
            offsetX : offsetX,
            offsetY : offsetY,
            pointB: {x:this.offsetX, y:this.offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world,options) 

    }
display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(2);
        fill("cyan")
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);

    }
}