class rope{
    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY


        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointC: {x:this.offsetX, y:this.offsetY},
            stiffness:1.0,
            length: 150
        }

        this.rope = Constraint.create(options);
        World.add(world,options) 

    }
display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        push();
        strokeWeight(5);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
        pop();

    }
}