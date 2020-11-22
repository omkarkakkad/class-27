class Chain {
    constructor(bodyA,bodyB){

        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length=10
        }
        this.chain=Constraint.create(options);
        World.add(world,this.Chain);
        
    }

    display(){
        var pointA = this.chain.body.positionA;
        var pointB = this.chain.body.positionB;

        line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);
    }

}